const myContacts = [
  {
    id: 1,
    name: "Andy Gates",
    phone: "+1 123 123456",
    email: "andy@gates.org",
    favorite: true,
    rating: 9,
    tags: ["popular", "cool", "work"]
  },
  {
    id: 2,
    name: "Betty Brave",
    phone: "+3 532 243582",
    email: "betty@brave.com",
    tags: ["beauty", "friend"]
  },
  {
    id: 3,
    name: "Charlie Bond",
    phone: "+4 086 234532",
    email: "charlie@bond.edu",
    tags: ["colleague"]
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
    myContacts.map(contact => contact.id).reduce((max, id) => Math.max(max, id))
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
const showContacts = contacts => {
  for (index = 0; index < contacts.length; index++) {
    const name = contacts[index].name
    const phone = contacts[index].phone
    const email = contacts[index].email

    console.log(`[${index + 1}]\t${name}\t(${phone})\t<${email}>`)
  }
}

//function to filter tags
const filterContacts = (...tags) => {
  const newFiltered = []
  const meshTags = [...tags]

  for (let iteraTags = 0; iteraTags < meshTags.length; iteraTags++) {
    for (let index = 0; index < myContacts.length; index++) {
      let bucket = myContacts[index].tags.filter(
        filterTag =>
          filterTag.toLowerCase() === meshTags[iteraTags].toLowerCase()
      )
      if (bucket.length !== 0) {
        newFiltered.push(myContacts[index])
      }
    }
  }
  //to avoid duplicates
  const uniqueFiltered = new Set(newFiltered)

  return Array.from(uniqueFiltered)
}
