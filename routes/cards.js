const router = require('express').Router();
const path = require('path');
const fs = require('fs');

const getCardsAsyncAwait = async () => {
  const cardsPath = path.join(__dirname, '../data/cards.json');

  try {
    const data = await fs.promises
      .readFile(cardsPath, { encoding: 'utf8' });

    return JSON.parse(data);
  } catch (error) {
      return res.status(500).json({
        message: 'Запрашиваемый файл не найден'
      });
  }
}

router.get('/cards', async (req, res) => {
  const cards = await getCardsAsyncAwait();

  res.status(200).json(cards);
});

module.exports = router;

