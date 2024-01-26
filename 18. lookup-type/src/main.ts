
// LOOKUP TYPE
import {Car} from './third-party';

function updateCarBrandA(id: Car['id'], newBrand: Car['brand']) {
  // Brand Update
}






type CarId = number;

interface CarBrand {
  popularity: number;
    logo: string;
    history: number;
}

function updateCarBrandB(id: CarId, brand: CarBrand) {
  // Brand Update
}