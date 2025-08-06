const baseURL = 'http://107.108.5.184:66';

export async function getLetterTypes() {
  try {
    const response = await fetch('/mock/LetterType.json', {
      method: 'GET',
      headers: {
        'Accept': 'application/json'
      }
    });

    const result = await response.json();
    console.log("📦 Mock API result:", result);
    return result.data; // ✅ Return only the array
  } catch (error) {
    console.error("❌ Failed to load mock letter types:", error);
    return [];
  }
}


export async function getEmpResourceType(MEmpID) {
  try {
    const response = await fetch(`${baseURL}/api/HRLetter/GetEmpResourceType?MEmpID=${MEmpID}`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json'
      }
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    console.log("Employee Resource Type:", data);
    return data;
  } catch (error) {
    console.error("Failed to fetch employee resource type:", error);
    throw error;
  }
}


fetch('http://107.108.5.184:66/api/HRLetter/UpdateDetails', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    ltrid: 0,
    instanceID: 0,
    empid: 0,
    lKeyValue: "yourKeyValue",
    letterType: "yourLetterType",
    permanentAddress: "yourPermanentAddress",
    currentAddress: "yourCurrentAddress",
    ltrReqOnCurOrPerAdd: "yourAddressType",
    reason: "yourReason",
    numberOfCopies: 1,
    offAddOfCorespondance: "yourOfficeAddress",
    placeOfTravel: "yourTravelPlace",
    noc_LeaveFrom: "2025-08-05T18:11:19.366Z",
    noc_LeaveTo: "2025-08-05T18:11:19.366Z"
  })
})
.then(response => response.json())
.then(data => {
  console.log('Success:', data);
})
.catch(error => {
  console.error('Error:', error);
});


// export async function getHRLetterDetailsByInstanceID(instanceId) {
//   const response = await fetch(`${baseURL}/api/HRLetter/GetHRLetterDetailsByInstanceID?InstanceID=${instanceId}`);
//   const data = await response.json();
//   console.log("HR Letter Details:", data);
// }


// export async function updateHRLetterDetails(payload) {
//   const response = await fetch(`${baseURL}/api/HRLetter/UpdateDetails`, {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify(payload),
//   });
//   const data = await response.json();
//   console.log("Update Response:", data);
// }


// export async function getApproverMEmpID() {
//   const response = await fetch(`${baseURL}/api/HRLetter/GetApproverMEmpID`);
//   const data = await response.json();
//   console.log("Approver MEmpID:", data);
// }


// export async function updateFileIndexByMasterID(payload) {
//   const response = await fetch(`${baseURL}/api/HRLetter/UpdateFileIndexIDByMasterID`, {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify(payload),
//   });
//   const data = await response.json();
//   console.log("Update FileIndexID:", data);
// }

// export async function updateWFAttachmentFileIndexID(payload) {
//   const response = await fetch(`${baseURL}/api/HRLetter/UpdateWFAttachmentFileIndexID`, {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify(payload),
//   });
//   const data = await response.json();
//   console.log("Update WF Attachment:", data);
// }


// export async function getWFAttachmentFileIndexId() {
//   const response = await fetch(`${baseURL}/api/HRLetter/GetWFAttachmentFileIndexId`);
//   const data = await response.json();
//   console.log("WF Attachment File Index ID:", data);
// }


// export async function getEmployeeTeam() {
//   const response = await fetch(`${baseURL}/api/HRLetter/GetEmployeeTeam`);
//   const data = await response.json();
//   console.log("Employee Team:", data);
// }


// export async function updateApprovedByHRDetails(payload) {
//   const response = await fetch(`${baseURL}/api/HRLetter/UpdateApprovedByHRDetails`, {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify(payload),
//   });
//   const data = await response.json();
//   console.log("HR Approval Update:", data);
// }
