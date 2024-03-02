const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema({
    
  companyName: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    require: true,
  },
  description: {
    type: String,
    required: true,
  },
  logoUrl: {
    type: String,
    required: true,
  },
  salary: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  duration: {
    type: String,
    required: true,
  },
  locationType: {
    type: String,
    required: true,
  },
  
},
{
  timestamps: {
    createdAt: 'created_at', // Use `created_at` to store the created date
    updatedAt: 'updated_at' // and `updated_at` to store the last updated date
  }
}
);

module.exports = mongoose.model("Job", jobSchema);

/*
1. Company name
2. Logo url
3. Job position || title
4. Monthly Salary
5. Job Type  // Fulltime Partime
6. remote office
7. location
8. job description
9. about company
10. skills required
11. additional informations
12. duration
*/
