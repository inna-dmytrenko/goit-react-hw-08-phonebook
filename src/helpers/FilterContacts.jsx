export  const filterContacts=(contacts, filter)=> {
    const normalizedFilter = filter.toLowerCase().trim();
    console.log(contacts)
    return contacts.filter(contact => 
        // console.log(contact.name)
        contact.name.toLowerCase().includes(normalizedFilter),
        // console.log(contact.name)
        );
}
// export default filterContacts;