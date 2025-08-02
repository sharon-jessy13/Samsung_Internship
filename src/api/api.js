const baseURL = 'https://107.108.5.184:66/swagger/index.html';


async function getLetterTypes() {
  const response = await fetch(`${baseURL}/api/HRLetter/GetLetterTypes`);
  const data = await response.json();
  console.log("Letter Types:", data);
}

async function getEmpResourceType() {
  const response = await fetch(`${baseURL}/api/HRLetter/GetEmpResourceType`);
  const data = await response.json();
  console.log("Employee Resource Type:", data);
}


async function getHRLetterDetailsByInstanceID(instanceId) {
  const response = await fetch(`${baseURL}/api/HRLetter/GetHRLetterDetailsByInstanceID?InstanceID=${instanceId}`);
  const data = await response.json();
  console.log("HR Letter Details:", data);
}


async function updateHRLetterDetails(payload) {
  const response = await fetch(`${baseURL}/api/HRLetter/UpdateDetails`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });
  const data = await response.json();
  console.log("Update Response:", data);
}


async function getApproverMEmpID() {
  const response = await fetch(`${baseURL}/api/HRLetter/GetApproverMEmpID`);
  const data = await response.json();
  console.log("Approver MEmpID:", data);
}


async function updateFileIndexByMasterID(payload) {
  const response = await fetch(`${baseURL}/api/HRLetter/UpdateFileIndexIDByMasterID`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });
  const data = await response.json();
  console.log("Update FileIndexID:", data);
}

async function updateWFAttachmentFileIndexID(payload) {
  const response = await fetch(`${baseURL}/api/HRLetter/UpdateWFAttachmentFileIndexID`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });
  const data = await response.json();
  console.log("Update WF Attachment:", data);
}


async function getWFAttachmentFileIndexId() {
  const response = await fetch(`${baseURL}/api/HRLetter/GetWFAttachmentFileIndexId`);
  const data = await response.json();
  console.log("WF Attachment File Index ID:", data);
}


async function getEmployeeTeam() {
  const response = await fetch(`${baseURL}/api/HRLetter/GetEmployeeTeam`);
  const data = await response.json();
  console.log("Employee Team:", data);
}


async function updateApprovedByHRDetails(payload) {
  const response = await fetch(`${baseURL}/api/HRLetter/UpdateApprovedByHRDetails`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });
  const data = await response.json();
  console.log("HR Approval Update:", data);
}
