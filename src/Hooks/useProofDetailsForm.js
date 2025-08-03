import { useEffect, useState } from 'react';
import { getHRLetterDetailsByInstanceID, getEmployeeTeam } from '../api/api';
const useProofDetailsForm = (options = {}) => {
  const {
    instanceId,
    workflowState: externalWorkflowState,
    setWorkflowState: setExternalWorkflowState,
  } = options;

  // Internal state fallbacks
  const [internalWorkflowState, setInternalWorkflowState] = useState('Initiate');
  const workflowState = externalWorkflowState ?? internalWorkflowState;
  const setWorkflowState = setExternalWorkflowState ?? setInternalWorkflowState;

  // Employee Info
  const [employee, setEmployee] = useState({
    name: '',
    genId: '',
    email: '',
    designation: '',
    division: '',
    manager: '',
    avatar: '/avatar.png'
  });

  // Form Fields
  const [letterType, setLetterType] = useState('Employment Certificate');
  const [reason, setReason] = useState('');
  const [comment, setComment] = useState('');
  const [nocFromDate, setNocFromDate] = useState('');
  const [nocToDate, setNocToDate] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  // UI control
  const isViewMode = workflowState === 'Approval' || workflowState === 'Report';
  const showCommentSection = workflowState !== 'Report';
  const showActionButtons = isSubmitted && workflowState === 'Approval';

  // Fetch workflowState and employee data on mount
  useEffect(() => {
    if (!instanceId) return;

    const fetchWorkflowAndEmployee = async () => {
      try {
        const wfData = await getHRLetterDetailsByInstanceID(instanceId);
        if (wfData?.WorkflowState) {
          setWorkflowState(wfData.WorkflowState);
        }

        const teamData = await getEmployeeTeam();
        if (teamData && teamData.length > 0) {
          const emp = teamData[0]; // Replace with actual logic to find the current employee
          setEmployee({
            name: emp.Name,
            genId: emp.GenID,
            email: emp.Email,
            designation: emp.Designation,
            division: emp.Division,
            manager: emp.ManagerName,
            avatar: '/avatar.png'
          });
        }
      } catch (err) {
        console.error("Error fetching data:", err);
      }
    };

    fetchWorkflowAndEmployee();
  }, [instanceId]);

  // Handlers
  const handleLetterTypeChange = (e) => {
    setLetterType(e.target.value);
    setIsSubmitted(false);
    setReason('');
    setComment('');
    setWorkflowState('Initiate');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setWorkflowState('Approval');
    console.log("Form Data:", getFormData());
  };

  const handleApproveClick = () => {
    setWorkflowState('Report');
  };

  const getFormData = () => ({
    letterType,
    reason,
    comment,
    nocFromDate,
    nocToDate,
    workflowState,
  });

  return {
    // Employee
    employee,

    // Fields
    letterType,
    reason,
    comment,
    nocFromDate,
    nocToDate,
    isSubmitted,
    workflowState,

    // UI Flags
    isViewMode,
    showCommentSection,
    showActionButtons,

    // Setters
    setReason,
    setComment,
    setNocFromDate,
    setNocToDate,

    // Handlers
    handleLetterTypeChange,
    handleSubmit,
    handleApproveClick,

    // Utilities
    getFormData,
    setWorkflowState,
  };
};

export default useProofDetailsForm;
