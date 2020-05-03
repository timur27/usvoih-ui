export class Spot {
  id: string;
  name: string;
  description: string;
  coverPhoto: string;
  country: string;
  city: string;
  street: string;
  house: string;
  apartment: string;
  postalCode: string;
  category: string;
  subcategory: string;

  constructor(id: string, name: string, description: string, coverPhoto: string, country: string, city: string, street: string, house: string, apartment: string, postalCode: string, category: string, subcategory: string) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.coverPhoto = coverPhoto;
    this.country = country;
    this.city = city;
    this.street = street;
    this.house = house;
    this.apartment = apartment;
    this.postalCode = postalCode;
    this.category = category;
    this.subcategory = subcategory;
  }
}
