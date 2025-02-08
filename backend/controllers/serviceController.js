const Service = require("../models/Service");

// Get all services
exports.getAllServices = async (req, res) => {
  try {
    const services = await Service.find().sort({ title: 1 });
    res.json(services);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

// Create a new service
exports.createService = async (req, res) => {
  const { title, description, icon,features } = req.body;

  try {
    const newService = new Service({ title, description, icon,features });
    await newService.save();
    res.status(201).json(newService);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

// Update a service
exports.updateService = async (req, res) => {
  const { id } = req.params;
  const { title, description, icon, features } = req.body;
  try {
    const updatedService = await Service.findByIdAndUpdate(
      id,
      { title, description, icon, features },
      { new: true }
    );
    if (!updatedService) {
      return res.status(404).json({ message: "Service not found" });
    }
    res.json(updatedService);
  } catch (error) {
    console.error("Error updating service:", error); // Log the error
    res.status(500).json({ message: "Server error" });
  }
};

// Delete a service
exports.deleteService = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedService = await Service.findByIdAndDelete(id);

    if (!deletedService) {
      return res.status(404).json({ message: "Service not found" });
    }

    res.json({ message: "Service deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};
