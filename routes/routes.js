const express = require('express');
const router = express.Router();
const signUp = require('../controller/signUp');
const signUpDoctor = require('../controller/signUpDoctor');
const logInUser = require("../controller/logInUser");
const getLoggedInUser = require('../controller/getLoggedInUser');
const signOutUser = require('../controller/signOutUser');
//Customer
const addCustomer = require('../controller/addCustomer');
const getAllCustomers = require('../controller/getAllCustomers');
const getCustomerById = require('../controller/getCustomerById');
const updateCustomer = require('../controller/updateCustomer');
const deleteCustomer = require('../controller/deleteCustomer');
const removeAuthCustomer = require('../controller/removeAuthCustomer');
const getCustomerByEmail = require('../controller/getCustomerByEmail');
const updateCustomerProfile = require('../controller/updateCustomerProfile');
//Doctor
const addDoctor = require('../controller/addDoctor');
const getDoctorByEmail = require('../controller/getDoctorByEmail');
const getAllDoctors = require('../controller/getAllDoctors');
const getDoctorById = require('../controller/getDoctorById');
const updateDoctor = require('../controller/updateDoctor');
const deleteDoctor = require('../controller/deleteDoctor');
const doctorLogin = require('../controller/doctorLogin');
// Employee
const getEmployeeByEmail = require('../controller/getEmployeeByEmail');
const addEmployee = require('../controller/addEmployee');
const getAllEmployees = require('../controller/getAllEmployees');
const getEmployeeById = require('../controller/getEmployeeById');
const updateEmployee = require('../controller/updateEmployee');
const deleteEmployee = require('../controller/deleteEmployee');

const verifyEmployee = require('../controller/verifyEmployee');
const getEmployeeByEmpCode = require('../controller/getEmployeeByEmpCode');
// Animals
const getAnimalByN_A_S = require('../controller/getAnimalByN_A_S');
const addAnimal = require('../controller/addAnimal');
const getAllAnimals = require('../controller/getAllAnimals');
const getAnimalById = require('../controller/getAnimalById');
const updateAnimal = require('../controller/updateAnimal');
const deleteAnimal = require('../controller/deleteAnimal');
const getAllAnimalsByType = require('../controller/getAllAnimalsByType');
const getAllAnimalsByFilter = require('../controller/getAllAnimalsByFilter');
const searchAnimalByName = require('../controller/searchAnimalByName');
// foods
const getFoodByName = require('../controller/getFoodByName');
const addFood = require('../controller/addFood');
const getAllFoods = require('../controller/getAllFoods');
const getFoodById = require('../controller/getFoodById');
const updateFood = require('../controller/updateFood');
const deleteFood = require('../controller/deleteFood');
const getAllFoodsByFilter = require('../controller/getAllFoodsByFilter');
const searchFoodByName = require("../controller/searchFoodByName");
//assets
const getAssetByName = require('../controller/getAssetByName');
const addAsset = require('../controller/addAsset');
const getAllAssets = require('../controller/getAllAssets');
const getAssetById = require('../controller/getAssetById');
const updateAsset = require('../controller/updateAsset');
const deleteAsset = require('../controller/deleteAsset');
const getAssetsByIds = require('../controller/getAssetsByIds');
const getAllAssetsByFilter = require('../controller/getAllAssetsByFilter');
const searchAssetByName = require('../controller/searchAssetByName');
// medicines
const getMedicineByName = require('../controller/getMedicineByName');
const addMedicine = require('../controller/addMedicine');
const getAllMedicines = require('../controller/getAllMedicines');
const getMedicineById = require('../controller/getMedicineById');
const updateMedicine = require('../controller/updateMedicine');
const deleteMedicine = require('../controller/deleteMedicine');
const getAllMedicinesByFilter = require('../controller/getAllMedicinesByFilter');
const searchMedicineByName = require('../controller/searchMedicineByName');

// prescriptions
const getAllPrescriptions = require('../controller/getAllPrescriptions');
const addPrescription = require('../controller/addPrescription');
const getPrescriptionsByDoctorId = require('../controller/getPrescriptionsByDoctorId');
const getPrescriptionById = require('../controller/getPrescriptionById');
const updatePrescription = require('../controller/updatePrescription');
const deletePrescription = require('../controller/deletePrescription');

//slots
const getSlotsByDoctorId = require('../controller/getSlotsByDoctorId');
const updateSlot = require('../controller/updateSlot');
const getAllPendingSlotsForGroom = require("../controller/getAllPendingSlotsForGroom");

//groom table
const createGroomEntry = require('../controller/createGroomEntry');
const getGroomDataByEmpId = require('../controller/getGroomDataByEmpId');


router.route("/signUp").post(signUp);
router.route("/signUpDoctor").post(signUpDoctor);
router.route("/logIn").post(logInUser);
router.route("/getLoggedInUser").get(getLoggedInUser);
router.route("/signOutUser").get(signOutUser);

router.route("/addCustomer").post(addCustomer);
router.route("/getAllCustomers").get(getAllCustomers);
router.route("/getCustomerById/:id").get(getCustomerById);
router.route("/updateCustomer").put(updateCustomer);
router.route("/deleteCustomer/:id").delete(deleteCustomer);
router.route("/removeAuthCustomer/:authId").delete(removeAuthCustomer); // not of use
router.route("/getCustomerByEmail/:email").get(getCustomerByEmail);
router.route("/updateCustomerProfile/:table").put(updateCustomerProfile);


router.route("/addDoctor").post(addDoctor);
router.route("/getDoctorByEmail/:email").get(getDoctorByEmail);
router.route("/getAllDoctors").get(getAllDoctors);
router.route("/getDoctorById/:id").get(getDoctorById);
router.route("/updateDoctor").put(updateDoctor);
router.route("/deleteDoctor/:id").delete(deleteDoctor);
router.route("/doctorLogin").post(doctorLogin)

router.route("/getEmployeeByEmail/:email").get(getEmployeeByEmail);
router.route("/addEmployee").post(addEmployee);
router.route("/getAllEmployees").get(getAllEmployees);
router.route("/getEmployeeById/:id").get(getEmployeeById);
router.route("/updateEmployee").put(updateEmployee);
router.route("/deleteEmployee/:id").delete(deleteEmployee);
router.route("/verifyEmployee").post(verifyEmployee);
router.route("/getEmployeeByEmpCode/:empCode").get(getEmployeeByEmpCode);



router.route("/getAnimalByN_A_S").post(getAnimalByN_A_S);
router.route("/addAnimal").post(addAnimal);
router.route("/getAllAnimals").get(getAllAnimals);
router.route("/getAnimalById/:id").get(getAnimalById);
router.route("/updateAnimal").put(updateAnimal);
router.route("/deleteAnimal/:id").delete(deleteAnimal);
router.route("/getAllAnimalsByType/:name").get(getAllAnimalsByType);
router.route("/getAllAnimalsByFilter/:type/:filter").get(getAllAnimalsByFilter);
router.route("/searchAnimalByName/:type/:name").get(searchAnimalByName);



router.route("/getFoodByName/:name").get(getFoodByName);
router.route("/addFood").post(addFood);
router.route("/getAllFoods").get(getAllFoods);
router.route("/getFoodById/:id").get(getFoodById);
router.route("/updateFood").put(updateFood);
router.route("/deleteFood/:id").delete(deleteFood);
router.route("/getAllFoodsByFilter/:filter").get(getAllFoodsByFilter);
router.route("/searchFoodByName/:name").get(searchFoodByName);



router.route("/getAssetByName/:name").get(getAssetByName);
router.route("/addAsset").post(addAsset);
router.route("/getAllAssets").get(getAllAssets);
router.route("/getAssetById/:id").get(getAssetById);
router.route("/updateAsset").put(updateAsset);
router.route("/deleteAsset/:id").delete(deleteAsset);

router.route("/getAssetsByIds").post(getAssetsByIds);
router.route("/getAllAssetsByFilter/:filter").get(getAllAssetsByFilter);
router.route("/searchAssetByName/:name").get(searchAssetByName);

router.route("/getMedicineByName/:name").get(getMedicineByName);
router.route("/addMedicine").post(addMedicine);
router.route("/getAllMedicines").get(getAllMedicines);
router.route("/getMedicineById/:id").get(getMedicineById);
router.route("/updateMedicine").put(updateMedicine);
router.route("/deleteMedicine/:id").delete(deleteMedicine);
router.route("/getAllMedicinesByFilter/:filter").get(getAllMedicinesByFilter);
router.route("/searchMedicineByName/:name").get(searchMedicineByName);



router.route("/getAllPrescriptions").get(getAllPrescriptions);
router.route("/addPrescription").post(addPrescription);
router.route("/getPrescriptionsByDoctorId/:id").get(getPrescriptionsByDoctorId);
router.route("/getPrescriptionById/:id").get(getPrescriptionById);
router.route("/updatePrescription").put(updatePrescription);
router.route("/deletePrescription/:id").delete(deletePrescription);

router.route("/getSlotsByDoctorId/:id").get(getSlotsByDoctorId);
router.route("/updateSlot").put(updateSlot);

router.route("/getAllPendingSlotsForGroom").get(getAllPendingSlotsForGroom);

router.route("/createGroomEntry").post(createGroomEntry);
router.route("/getGroomDataByEmpId/:id").get(getGroomDataByEmpId);




module.exports = router;