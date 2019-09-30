const streetName = user => {
  const address = user.address;

  if (address) {
    const street = address.street;

    if (street) {
      return street.name;
    }
  }
  return "no street";
};

const streetName = user =>
  fromNullable(user.address)
    .chain(a => frommNullable(a.street))
    .map(s => s.name)
    .fold(e => "no street", n => n);
