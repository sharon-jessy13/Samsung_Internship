import { useState } from 'react';

const useProofDetailsForm = (externalState = {}) => {
  const {
    workflowState: externalWorkflowState,
    setWorkflowState: setExternalWorkflowState,
  } = externalState;

  const [internalWorkflowState, setInternalWorkflowState] = useState('Initiate');

  const workflowState = externalWorkflowState ?? internalWorkflowState;
  const setWorkflowState = setExternalWorkflowState ?? setInternalWorkflowState;

  const [letterType, setLetterType] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [reason, setReason] = useState('');
  const [comment, setComment] = useState('');
  const [nocFromDate, setNocFromDate] = useState('');
  const [nocToDate, setNocToDate] = useState('');

  const isViewMode = workflowState === 'Approval' || workflowState === 'Report';
  const showCommentSection = workflowState !== 'Report';

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

    const formData = {
      letterType,
      reason,
      comment,
    };
    console.log("Form Data:", formData);
  };

  const handleApproveClick = () => {
    setWorkflowState('Report');
  };

  const showActionButtons = isSubmitted && workflowState === 'Approval';

  return {
    letterType,
    isSubmitted,
    reason,
    comment,
    nocFromDate,
    nocToDate,
    workflowState,
    isViewMode,
    showCommentSection,
    handleLetterTypeChange,
    handleSubmit,
    handleApproveClick,
    setReason,
    setComment,
    setNocFromDate,
    setNocToDate,
    showActionButtons,
  };
};

export default useProofDetailsForm;