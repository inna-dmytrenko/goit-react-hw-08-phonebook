import { useDispatch, useSelector } from "react-redux"
import { useEffect, useState } from "react";
import contactsSelectors from "../redux/contacts/contacts-selectors";
// import contactsOperations from "../redux/contacts/contacts-operations";
import Container from '../Components/Container/Container'
// import Filter from '../Components/PhoneBookFilter/PhoneBookFilter'
import PhoneBookEditor from '../Components/PhoneBookEditor/PhoneBookEditor'
import PhoneBookList from "../Components/PhoneBookList/PhoneBookList";
// import Modal from "../Components/Modal/Modal";

export default function ContactsView(params)
{
    const dispatch = useDispatch();
    // const isLoadingContacts = useSelector(contactsSelectors.getLoading);
    // const isAll = useSelector(contactsSelectors.getAllContacts)
    // useEffect(() => {
    //    dispatch(contactsOperations.fetchContacts())
    // }, [dispatch])
    // const [isModalOpen, setIsModalOpen] = useState(false);
//    const toggleModal = () => setIsModalOpen(state => !state);
    return (
        <Container>
            {/* <button type="submit" onClick={toggleModal}>Add contact</button> */}
            {/* {isLoadingContacts && <h1>Загружаем...</h1>} */}
                    <PhoneBookEditor  />
            <PhoneBookList />
            {/* <Filter /> */}
            {/* {isModalOpen && ( */}
                {/* // <Modal onClose={toggleModal}> */}

                {/* // </Modal> */}
            {/* )} */}
        </Container>
    )
}
