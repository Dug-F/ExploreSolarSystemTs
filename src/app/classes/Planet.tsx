import {Moon} from "@/app/classes/Moon"
import { SupplementaryDataInterfaceObject } from "../interfaces/supplementaryDataInterfaces";

export class Planet {
  _id: string = "";
  _day: string = "";
  _description: string = "";
  _distance: string = "";
  _image: string = "";
  _name: string = "";
  _moons: Moon[] = [];
  _radius: string = "";
  _moonsCount: string = "0";
  _temperature: string = "";
  _year: string = "";

  constructor(name: string) {
    this.name = name;
  }

  get day(): string {
    return this._day;
  }
  get description(): string {
    return this._description;
  }
  get distance(): string {
    return this._distance;
  }
  get id(): string {
    return this._id;
  }
  get image(): string {
    return this._image;
  }
  get moons() {
    return this._moons;
  }
  get moonsCount(): string {
    return this._moonsCount;
  }
  get name(): string {
    return this._name;
  }
  get radius(): string {
    return this._radius;
  }
  get temperature(): string {
    return this._temperature;
  }
  get year(): string {
    return this._year;
  }

  set day(value: string) {
    this._day = value;
  }
  set description(value: string) {
    this._description = value;
  }
  set distance(value: string) {
    this._distance = value;
  }

  set id(value: string) {
    this._id = value;
  }
  set image(value: string) {
    this._image = value;
  }

  set name(value) {
    this._name = value;
  }
  set moons(value) {
    this._moons = value;
  }

  set moonsCount(value: string) {
    this._moonsCount = value;
  }

  set radius(value: string) {
    this._radius = value;
  }
  set temperature(value: string) {
    this._temperature = value;
  }
  set year(value: string) {
    this._year = value;
  }

  addSupplementaryData(supplementaryData: SupplementaryDataInterfaceObject) {
    this.day = supplementaryData.day;
    this.description = supplementaryData.description;
    this.distance = supplementaryData.distance;
    this.id = supplementaryData.id;
    this.image = supplementaryData.image;
    this.moonsCount = supplementaryData.moonsCount;
    this.radius = supplementaryData.radius;
    this.temperature = supplementaryData.temperature;
    this.year = supplementaryData.year;
  }
}
