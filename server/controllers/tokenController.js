const { BigNumber } = require('ethers');

const { Token } = require('../models');

module.exports = {
  list(req, res) {
    Token.findAll({})
      .then((tokens) =>
        res.status(201).json({
          error: false,
          data: tokens,
        })
      )
      .catch((error) =>
        res.json({
          error: true,
          message: error,
        })
      );
  },

  add(req, res) {
    const { name, symbol, address } = req.body;

    Token.create({
      name: name,
      symbol: symbol,
      address: address,
    });
  },

  delete(req, res) {
    const { address } = req.body;

    console.log(req.body);

    Token.destroy({
      where: {
        address: address,
      },
    })
      .then((status) =>
        res.status(201).json({
          error: false,
          message: 'token has been deleted',
        })
      )
      .catch((error) =>
        res.json({
          error: true,
          error: error,
        })
      );
  },
  calculateRoyalty(req, res) {
    try {
      const { salePrice, royaltyBasisPoints } = req.body;

      if (!salePrice || !royaltyBasisPoints) {
        res.status(400).json({
          error: true,
          message: 'salePrice and royaltyBasisPoints are required.',
        });

        return;
      }

      if (isNaN(salePrice) || isNaN(royaltyBasisPoints)) {
        res.status(400).json({
          error: true,
          message: 'salePrice and royaltyBasisPoints must be integer string or number',
        });

        return;
      }

      if (Number(salePrice) <= 0 || Number(royaltyBasisPoints) <= 0) {
        res.status(400).json({
          error: true,
          message: 'salePrice and royaltyBasisPoints must not be negative numbers',
        });

        return;
      }

      if (Number(royaltyBasisPoints) >= 1000) {
        res.status(400).json({
          error: true,
          message: 'Royalty cannot exceed 10% (1000 basis points)',
        });

        return;
      }

      const salePriceBn = BigNumber(salePrice);
      const royaltyAmountBn = salePriceBn.mul(Number(royaltyBasisPoints)).div(10000);

      res.json({
        error: false,
        data: {
          salePrice: salePrice,
          royaltyBasisPoints: royaltyBasisPoints,
          royaltyPercentage: Number(royaltyBasisPoints) / 100,
          royaltyAmount: royaltyAmountBn.toString(),
        },
      });
    } catch (e) {
      res.status(500).json({
        error: true,
        message: 'Internal server error, please try again.',
      });
    }
  },
};
