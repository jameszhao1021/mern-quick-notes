import { getData } from '../utilities/users-api';

export  async function fetchData() {
    // try {
    //     const receivedData = await getData();
    //     console.log('Received data:', receivedData);

    //     // Assuming receivedData is an object with a 'data' property containing the array of notes
    //     if (receivedData && receivedData.data && Array.isArray(receivedData.data)) {
    //         setNotes(receivedData.data);
    //     } else {
    //         console.error('Invalid data format:', receivedData);
    //     }
    // } catch (error) {
    //     console.error('Error fetching data:', error);
    // }
    try {
        const receivedData = await getData();
        console.log('Received data:', receivedData);

        // Assuming receivedData is an object with a 'data' property containing the array of notes
        if (receivedData && receivedData.data && Array.isArray(receivedData.data)) {
            return receivedData.data;
        } else {
            console.error('Invalid data format:', receivedData);
            return []; // Return an empty array if data format is invalid
        }
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error; // Rethrow the error to be handled by the caller
    }
}