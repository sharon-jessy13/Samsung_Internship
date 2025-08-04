const baseURL = 'https://107.108.5.184:66/swagger/index.html';


export async function getLetterTypes() {
  try {
    const response = await fetch(`${baseURL}/api/HRLetter/GetLetterTypes`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json'
      }
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    console.log("Letter Types:", data);
    return data;
  } catch (error) {
    console.error("Failed to fetch letter types:", error);
    throw error;
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


export async function getHRLetterDetailsByInstanceID(instanceId) {
  const response = await fetch(`${baseURL}/api/HRLetter/GetHRLetterDetailsByInstanceID?InstanceID=${instanceId}`);
  const data = await response.json();
  console.log("HR Letter Details:", data);
}


export async function updateHRLetterDetails(payload) {
  const response = await fetch(`${baseURL}/api/HRLetter/UpdateDetails`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });
  const data = await response.json();
  console.log("Update Response:", data);
}


export async function getApproverMEmpID() {
  const response = await fetch(`${baseURL}/api/HRLetter/GetApproverMEmpID`);
  const data = await response.json();
  console.log("Approver MEmpID:", data);
}


export async function updateFileIndexByMasterID(payload) {
  const response = await fetch(`${baseURL}/api/HRLetter/UpdateFileIndexIDByMasterID`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });
  const data = await response.json();
  console.log("Update FileIndexID:", data);
}

export async function updateWFAttachmentFileIndexID(payload) {
  const response = await fetch(`${baseURL}/api/HRLetter/UpdateWFAttachmentFileIndexID`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });
  const data = await response.json();
  console.log("Update WF Attachment:", data);
}


export async function getWFAttachmentFileIndexId() {
  const response = await fetch(`${baseURL}/api/HRLetter/GetWFAttachmentFileIndexId`);
  const data = await response.json();
  console.log("WF Attachment File Index ID:", data);
}


export async function getEmployeeTeam() {
  const response = await fetch(`${baseURL}/api/HRLetter/GetEmployeeTeam`);
  const data = await response.json();
  console.log("Employee Team:", data);
}


export async function updateApprovedByHRDetails(payload) {
  const response = await fetch(`${baseURL}/api/HRLetter/UpdateApprovedByHRDetails`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });
  const data = await response.json();
  console.log("HR Approval Update:", data);
}
