export function validatePostData(req, res, next) {
  const { title, image, category_id, description, content, status_id } =
    req.body;

  //ตรวจสอบว่ามีการป้อนข้อมูลในแต่ละ field มาหรือไม่
  if (!title) {
    return res.status(400).json({
      message: "Title is required",
    });
  }

  if (!image) {
    return res.status(400).json({
      message: "Image is required",
    });
  }

  if (!category_id) {
    return res.status(400).json({
      message: "Category ID is required",
    });
  }

  if (!description) {
    return res.status(400).json({
      message: "Description is required",
    });
  }

  if (!content) {
    return res.status(400).json({
      message: "Content is required",
    });
  }

  if (!status_id) {
    return res.status(400).json({
      message: "Status ID is required",
    });
  }

  //ตรวจสอบ type ของข้อมูลที่ Client ส่งมา
  if (typeof title !== "string") {
    return res.status(400).json({ message: "Title must be a string type" });
  }

  if (typeof image !== "string") {
    return res.status(400).json({ message: "Image must be a string type" });
  }

  if (typeof category_id !== "number") {
    return res
      .status(400)
      .json({ message: "Category ID must be a number type" });
  }

  if (typeof description !== "string") {
    return res
      .status(400)
      .json({ message: "Description must be a string type" });
  }

  if (typeof content !== "string") {
    return res.status(400).json({ message: "Content must be a string type" });
  }

  if (typeof status_id !== "number") {
    return res.status(400).json({ message: "Status ID must be a number type" });
  }

  next();
}
