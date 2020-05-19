import {Address} from './address';
import {Type} from './type';
import {Contact} from './contact';
import {Hour} from './hour';
import {Rating} from './rating';

export class Spot {
  id: string;
  name: string;
  description: string;
  address: Address;
  type: Type;
  contact: Contact;
  coverPhoto: string;
  photos: Array<any>;
  overallRating: number;
  businessHours: Array<Hour>;
  ratings: Array<Rating>;
  tags: Array<string>;

  constructor(id: string, name: string, description: string, address: Address, type: Type, contact: Contact, coverPhoto: string, photos: Array<any>, overallRating: number, businessHours: Array<Hour>, ratings: Array<Rating>, tags: Array<string>) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.address = address;
    this.type = type;
    this.contact = contact;
    this.coverPhoto = coverPhoto;
    this.photos = photos;
    this.overallRating = overallRating;
    this.businessHours = businessHours;
    this.ratings = ratings;
    this.tags = tags;
  }
}
