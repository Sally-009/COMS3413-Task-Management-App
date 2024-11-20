//const express = require("express");
//const router = express.Router();
//const Comment = require("../models/Comments");
//const authMiddleware = require("../middleware/authMiddleware");
//require("dotenv").config();

//router.post("/", authMiddleware, async (req, res) => {
  //console.log("comment routes req", req.body);
  //try {
    //console.log("comment routes req", req.body);
    //const { Comment } = req.body;
    //const newComment = new Comment({
      //title,
      //description,
      //user: req.user.id,
    //});

    //const savedItem = await newItem.save();
    //console.log("comments route saved Comment", savedItem);
    //res.status(201).json(savedItem);
  //} catch (error) {
   // res.status(500).json({ error: "Failed to add item" });
  //}
//});

//router.get("/", authMiddleware, async (req, res) => {
  //try {
    // this finds the items that matches the current users id
    //const items = await Item.find({ user: req.user.id });
    //res.json(items);
  //} catch (error) {
    //res.status(500).json({ error: "Failed to get items" });
  //}
//});

//router.put("/:id", authMiddleware, async (req, res) => {
  //try {
    //const { title, description } = req.body;

    // Find the item by ID and ensure it belongs to the authenticated user
    //const item = await Item.findOne({ _id: req.params.id, user: req.user.id });

    //if (!item) {
      //return res.status(404).json({ message: "Item not found" });
    //}

    // Update the item's fields
    //item.title = title || item.title;
    //item.description = description || item.description;

    //const updatedItem = await item.save();
    //res.json(updatedItem);
  //} catch (error) {
    //console.error("Error updating item:", error);
    //res.status(500).json({ error: "Failed to update item" });
  //}
//});

//router.delete("/:id", authMiddleware, async (req, res) => {
  //try {
    // Find the item by ID and ensure it belongs to the authenticated user
    //const item = await Item.findOne({ _id: req.params.id, user: req.user.id });

    //if (!item) {
      //return res.status(404).json({ message: "Item not found" });
    //}

    //await item.deleteOne({_id: req.params.id});
    //res.json({ message: "Item deleted successfully" });
  //} catch (error) {
    //console.error("Error deleting item:", error);
    //res.status(500).json({ error: "Failed to delete item" });
  //}
//});

//module.exports = router;