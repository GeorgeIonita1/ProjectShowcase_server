import styles from './projectEditForm.module.scss';

import { useContext } from "react";
import { ModalDataContext } from "../../contexts/ModalDataContext";

export default function ProjectEditForm({onSubmitForm}) {
    const modalData = useContext(ModalDataContext);

    if (modalData.requestType === 'delete') return (
        <>
            <h1>are you sure delete?</h1>
            <span onClick={onSubmitForm}>yes</span>
        </>

    )
    if (modalData.requestType === 'visibility') return (
        <>
            <h1>are you sure delete?</h1>
            <span onClick={onSubmitForm}>yes</span>
        </>

    )

    return modalData.requestType === 'delete' ? (
        <h1>are you sure delete?</h1>
    ) : (
        <form onSubmit={onSubmitForm} className={styles.form}>
        <label>
            Name:
            <input
                type='text'
                name='name'
                defaultValue={modalData?.data?.name}
                required
                />
        </label>
        <br />
        <label>
            Description:
            <input
                type='text'
                name='description'
                defaultValue={modalData?.data?.description}
                required
                />
        </label>
        <br />
        <label>
            Project Link:
            <input
                type='string'
                name='redirrect'
                defaultValue={modalData?.data?.redirrect}
                required
                />
        </label>
        <label>
            Image URL:
            <input
                type='string'
                name='imgURL'
                defaultValue={modalData?.data?.imgURL}
                required
                />
        </label>
        <label>
            Is Visible
            <input
                type='checkbox'
                name='isVisible'
                defaultChecked={modalData?.data?.isVisible || false}
                />
        </label>
        <br />
        <button type='submit'>Submit</button>
    </form>
    );
}