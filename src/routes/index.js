import { ApartmentController } from "../controllers";

const router = (app) => {
  /* GET index page. */
  app.get("/", (req, res) => {
    res.json({ message: "Welcome to Airbnb" });
  });

  app.post("/add-apartment", ApartmentController.addApartment);
};

export default router;
