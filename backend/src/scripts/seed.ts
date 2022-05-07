import * as _ from 'lodash';
import { createConnection, ConnectionOptions } from 'typeorm';
import { configService } from '../config/config.service';
import { ItemService } from '../item/services/item.service';
import { Item } from '../item/entities/item.entity';
import { ItemDTO } from '../item/dtos/item.dto';

async function run() {
  const seedId = Date.now()
    .toString()
    .split('')
    .reverse()
    .reduce((s, it, x) => (x > 3 ? s : (s += it)), '');

  const opt = {
    ...configService.getTypeOrmConfig(),
    debug: true,
  };

  const connection = await createConnection(opt as ConnectionOptions);
  const itemService = new ItemService(connection.getRepository(Item));

  const locationArray = [
    'San Francisco, USA',
    'Los Angeles, USA',
    'Miami, USA',
    'Paris, France',
    'Toronto, CA',
  ];

  const organizationArray = [
    'Zencorporation',
    'Groovestreet',
    'Iselectrics',
    'Toughzap',
    'Konmatfix',
  ];

  const tags = ['client', 'workshop', 'internal works', 'boardroom'];

  const getTags = () => {
    const len = Math.floor(Math.random() * locationArray.length);
    return _.range(0, len).map((n) => tags[n]);
  };

  const work = _.range(1, 50)
    .map((n) =>
      ItemDTO.from({
        name: `seed${seedId}-${n}`,
        phoneNumber: `${7082537507 + n}`,
        status: Math.round(Math.random()) ? true : false,
        location:
          locationArray[Math.floor(Math.random() * locationArray.length)],
        organization:
          organizationArray[
            Math.floor(Math.random() * organizationArray.length)
          ],
        isFavorite: Math.round(Math.random()) ? true : false,
        tags: getTags(),
      }),
    )
    .map((dto) =>
      itemService.create(dto).then((r) => (console.log('done ->', r.name), r)),
    );

  return await Promise.all(work);
}

run()
  .then((_) => console.log('...wait for script to exit'))
  .catch((error) => console.error('seed error', error));
