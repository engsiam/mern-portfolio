const Team = require("../models/Team");

// Get all team members
exports.getAllTeamMembers = async (req, res) => {
  try {
    const teamMembers = await Team.find().sort({ name: 1 });
    res.json(teamMembers);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

// Create a new team member
exports.createTeamMember = async (req, res) => {
  const { name, designation, image } = req.body;

  try {
    const newTeamMember = new Team({ name, designation, image });
    await newTeamMember.save();
    res.status(201).json(newTeamMember);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

// Update a team member
exports.updateTeamMember = async (req, res) => {
  const { id } = req.params;
  const { name, designation, image } = req.body;

  try {
    const updatedTeamMember = await Team.findByIdAndUpdate(
      id,
      { name, designation, image },
      { new: true }
    );

    if (!updatedTeamMember) {
      return res.status(404).json({ message: "Team member not found" });
    }

    res.json(updatedTeamMember);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

// Delete a team member
exports.deleteTeamMember = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedTeamMember = await Team.findByIdAndDelete(id);

    if (!deletedTeamMember) {
      return res.status(404).json({ message: "Team member not found" });
    }

    res.json({ message: "Team member deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};
