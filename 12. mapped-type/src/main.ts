type DeviceFormatter<T> = {
    [K in keyof T]?: T[K];
}

// type DeviceFormatter = {
//     manufacturer?: string;
//     price?: number;
// }

type Device = {
    manufacturer?: string;
    price?: number;
}

const iphone: DeviceFormatter<Device> = { manufacturer: 'apple', price: 100 };

// const priceOnly = DeviceFormatter<Device> = { price: 23 };
// const manufactureOnly = DeviceFormatter<Device> = { manufacturer: 'apple' };
// const empty = DeviceFormatter<Device> = {  };