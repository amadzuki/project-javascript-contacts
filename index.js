const myContacts = [
  {
    id: 1,
    name: "Andy Gates",
    phone: "+1 123 123456",
    email: "andy@gates.org",
    favorite: true,
    rating: 9,
    tags: ["popular", "cool"]
  },
  {
    id: 1,
    name: "Betty Brave",
    phone: "+3 532 243582",
    email: "betty@brave.com",
    tags: ["beauty"]
  },
  {
    id: 1,
    name: "Charlie Bond",
    phone: "+4 086 234532",
    email: "charlie@bond.edu"
  }
]

class contact {
  constructor(id, name, phone, email, favorite, rating, ...tags) {
    this.id = id
    this.name = name
    this.phone = phone
    this.email = email
    this.favorite = favorite
    this.rating = rating
    this.tags = [...tags]
  }
}

// function to add contact
const addContact = (
  newName,
  newPhone,
  newEmail,
  newFavorite,
  newRating,
  ...newTags
) => {
  const lastID = () => {
    myContacts
      .map(contact => contact.id)
      .reduce((max, value) => Math.max(max, value))
  }

  const newContact = new contact(
    lastID + 1,
    newName,
    newPhone,
    newEmail,
    newFavorite,
    newRating,
    ...newTags
  )

  myContacts.push(newContact)
}

//function to show contact names in a list
const showContacts = () => {
  for (index = 0; index < myContacts.length; index++) {
    const name = myContacts[index].name
    const phone = myContacts[index].phone
    const email = myContacts[index].email

    console.log(`[${index + 1}]\t${name}\t(${phone})\t<${email}>`)
  }
}
