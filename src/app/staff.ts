
export class Staff {
  touched?: boolean;
  selected?: boolean;
  id: number;
  name = '';
  location = '';
  office = '';
  officePhone = '';
  cellPhone = '';
}

export const STAFFS: Staff[] = [
  {
    id: 501,
    name: 'Khali Zhang',
    location: 'Shanghai',
    office: 'C-103',
    officePhone: 'x55778',
    cellPhone: '650-353-1239',
  },
];
