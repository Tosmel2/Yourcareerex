const express = require("express");
const router = express.Router();
const Item = require("../models/item");

// Add a found item
router.post("/", async (req, res) => {
  try {
    const item = new Item(req.body);
    await item.save();
    res.status(201).json(item);
  } catch (err) {
    res.status(400).json({ error: err.message });
    // console.log(err.message);
    // res.status(400).json({ error: "" });
  }
});

// View all unclaimed items
router.get("/unclaimed", async (req, res) => {
  const items = await Item.find({ claimed: false });
  res.json(items);
});

// View one item by ID
router.get("/:id", async (req, res) => {
  try {
    const item = await Item.findById(req.params.id);
    if (!item) return res.status(404).json({ message: "Item not found" });
    res.json(item);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Update item (details or mark as claimed)
router.put("/:id", async (req, res) => {
  try {
    const item = await Item.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!item) return res.status(404).json({ message: "Item not found" });
    res.json(item);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Delete item
router.delete("/:id", async (req, res) => {
  try {
    const result = await Item.findByIdAndDelete(req.params.id);
    if (!result) return res.status(404).json({ message: "Item not found" });
    res.json({ message: "Item deleted" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
