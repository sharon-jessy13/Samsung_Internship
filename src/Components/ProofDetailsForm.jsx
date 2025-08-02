import React from 'react';
import './ProofDetailsForm.css';
import {
  Box,
  Typography,
  TextareaAutosize,
  Button,
  Link,
  Select,
  MenuItem,
  FormControl,
  Grid,
  TextField
} from '@mui/material';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import CompareArrowsIcon from "@mui/icons-material/CompareArrows";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import useProofDetailsForm from '../Hooks/useProofDetailsForm';

import Addressproof from './Addressproof';
import NOC from './NOC';
import OfficeCorrespondence from './OfficeCorrespondence';


function ProofDetailsForm({ workflowState, setWorkflowState }) {
  const {
    letterType,
    isSubmitted,
    reason,
    comment,
    nocFromDate,
    nocToDate,
    isViewMode,
    showCommentSection,
    handleLetterTypeChange,
    handleSubmit,
    handleApproveClick,
    setReason,
    setComment,
    setNocFromDate,
    setNocToDate,
    showActionButtons
  } = useProofDetailsForm({ workflowState, setWorkflowState });

  return (
    <Box className="proof-details-container">
      <Box className="proof-header">
        <Typography component="h2" className="proof-header-title">Proof Details</Typography>
        <Box className="proof-note">
          <InsertDriveFileIcon className="note-icon" />
          <Typography className="note-text">Note</Typography>
        </Box>
      </Box>

      <form onSubmit={handleSubmit}>
        <Box className="form-section">
          <Grid container spacing={2} className="letter-grid">
            
            <Grid item xs={12} sm={4}>
              <FormControl fullWidth>
                <Typography className="label">Type of Letter Required</Typography>
                <Select
                  value={letterType}
                  onChange={handleLetterTypeChange}
                  className="select-box"
                  disabled={isViewMode} 
                >
                  <MenuItem value="Address Proof">Address Proof</MenuItem>
                  <MenuItem value="Employment Certificate">Employment Certificate</MenuItem>
                  <MenuItem value="No Objection Certificate">No Objection Certificate</MenuItem>
                  <MenuItem value="Office Correspondence Letter">Office Correspondence Letter</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            
            {letterType === 'No Objection Certificate' && (
              <Grid item xs={12} sm={4}> {/* Adjusted size */}
                <Typography className="label">Leave From</Typography>
                <TextField
                  type="date"
                  fullWidth
                  value={nocFromDate}
                  onChange={(e) => setNocFromDate(e.target.value)}
                  className="select-box"
                  InputLabelProps={{ shrink: true }}
                  disabled={isViewMode} 
                />
              </Grid>
            )}

            
            {letterType === 'No Objection Certificate' && (
              <Grid item xs={12} sm={4}> {/* Adjusted size */}
                <Typography className="label">Leave To</Typography>
                <TextField
                  type="date"
                  fullWidth
                  value={nocToDate}
                  onChange={(e) => setNocToDate(e.target.value)}
                  className="select-box"
                  InputLabelProps={{ shrink: true }}
                  disabled={isViewMode} 
                />
              </Grid>
            )}
          </Grid>
        </Box>
        
        {letterType === 'Address Proof' && <Addressproof />}
        {letterType === 'No Objection Certificate' && <NOC workflowState={workflowState} />}
        {letterType === 'Office Correspondence Letter' && <OfficeCorrespondence />}

        <Box className="form-section">
          <Typography className="label">Letter required for (Reason)</Typography>
          <TextareaAutosize
            required
            minRows={3}
            placeholder="XXX-XXX-XX-XXXX-X"
            className="textarea"
            value={reason}
            onChange={(e) => setReason(e.target.value)}
          />
        </Box>

        {showCommentSection && (
          <Box className="form-section">
            <Typography className="label">Comment (Max 500 Chars)</Typography>
            <TextareaAutosize
              minRows={5}
              maxRows={10}
              placeholder="Enter your comment here..."
              maxLength={500}
              className="textarea"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              disabled={isViewMode} 
            />
          </Box>
        )}

       
        {!isSubmitted ? ( 
          <Box className="form-submit">
            <Button variant="contained" type="submit" className="submit-button">
              Submit
            </Button>
          </Box>
        ) : ( 
          showActionButtons && ( 
            <>
              <Box className="action-buttons" sx={{ mt: 4, display: 'flex', justifyContent: 'flex-end', gap: 2 }}>
                <Button variant="outlined" color="primary" className="action-button">
                  Restart
                </Button>
                <Button variant="outlined" color="error" className="action-button">
                  Reject
                </Button>
                <Button
                  variant="contained"
                  sx={{ backgroundColor: "#38AEE0" }}
                  className="action-button"
                  onClick={handleApproveClick}
                >
                  Approve
                </Button>
              </Box>

              <Box className="transfer-workflow" sx={{
                backgroundColor: '#f0f7ff',
                borderRadius: 1,
                px: 2,
                py: 1.5,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                cursor: 'pointer',
                mt: 4,
                mb: 2,
              }}>
                <Box className="transfer-workflow-left" display="flex" alignItems="center">
                  <CompareArrowsIcon sx={{ color: '#5c6bc0', mr: 1 }} />
                  <Typography className="transfer-workflow-text">
                    Transfer Workflow
                  </Typography>
                </Box>
                <ArrowForwardIosIcon sx={{ fontSize: 16 }} />
              </Box>
            </>
          )
        )}
      </form>

      <Box className="view-policies">
        <DescriptionOutlinedIcon className="policy-icon" />
        <Link href="#" underline="hover" color="textSecondary">
          <Typography variant="body2">View Policies</Typography>
        </Link>
      </Box>
    </Box>
  );
}

export default ProofDetailsForm;