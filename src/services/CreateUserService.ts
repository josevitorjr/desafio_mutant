import { getRepository, In } from 'typeorm';

import User from '../models/User';
import Company from '../models/Company';
import Address from '../models/Address';

interface Request {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: number;
      lng: number;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

class CreateUserService {
  async execute(data: any): Promise<Request[]> {
    const usersRepository = getRepository(User);
    const companiesRepository = getRepository(Company);
    const addressesRepository = getRepository(Address);

    const createdUsers: Request[] = [];

    function alphabetic(prop: any) {
      return function (a: string, b: string) {
        if (a[prop] > b[prop]) {
          return 1;
        } else if (a[prop] < b[prop]) {
          return -1;
        }
        return 0;
      }
    }

    const ordenedData = data.sort(alphabetic('name'));

    ordenedData.forEach(async (user: any) => {
      if (user.address.suite.includes('Suite')) {
        createdUsers.push({
          id: user.id,
          name: user.name,
          username: user.username,
          email: user.email,
          address: {
            street: user.address.street,
            suite: user.address.suite,
            city: user.address.city,
            zipcode: user.address.zipcode,
            geo: {
              lat: user.address.geo.lat,
              lng: user.address.geo.lng,
            },
          },
          phone: user.phone,
          website: user.website,
          company: {
            name: user.company.name,
            catchPhrase: user.company.catchPhrase,
            bs: user.company.bs,
          },
        });

        const companyToCreate = companiesRepository.create({
          name: user.company.name,
          catchPhrase: user.company.catchPhrase,
          bs: user.company.bs,
        });

        await companiesRepository.save(companyToCreate);

        const userToCreate = usersRepository.create({
          id: user.id,
          name: user.name,
          username: user.username,
          email: user.email,
          phone: user.phone,
          website: user.website,
          company_id: companyToCreate.id
        });

        await usersRepository.save(userToCreate);

        const addressToCreate = addressesRepository.create({
          street: user.address.street,
          suite: user.address.suite,
          city: user.address.city,
          zipcode: user.address.zipcode,
          lat: user.address.geo.lat,
          lng: user.address.geo.lng,
          user_id: userToCreate.id,
        });

        await addressesRepository.save(addressToCreate);
      }
    });
    return createdUsers;
  }
}

export default CreateUserService;
