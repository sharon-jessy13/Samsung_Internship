import React from 'react';
import {
  Box, Grid, Typography, Avatar, Divider, IconButton, Container
} from '@mui/material';
import { ArrowBack, AlarmOn, Assignment } from '@mui/icons-material';
import './HRLetterHeader.css';
import ProofDetailsForm from './ProofDetailsForm';
import useProofDetailsForm from '../Hooks/useProofDetailsForm';

export default function HRLetterHeader({ instanceId = 123 }) {
  const {
    employee,
    workflowState,
    setWorkflowState
  } = useProofDetailsForm({ instanceId });

  return (
    <Box className="hr-header-container">
      <Typography variant="caption" className="breadcrumb">
        My Workspace &gt; HR Letter
      </Typography>

      <Box className="header-row">
        <Box display="flex" alignItems="center" gap={1}>
          <IconButton size="small">
            <ArrowBack />
          </IconButton>
          <Typography variant="body2">HR Request.{workflowState}</Typography>
        </Box>
        <AlarmOn className="clock-icon" />
      </Box>

      <Grid container alignItems="center">
        <Grid item xs={12} sm={4} md={3}>
          <Box display="flex" alignItems="center">
            <Avatar src={employee.avatar} alt={employee.name} sx={{ width: 56, height: 56, mr: 1.5 }} />
            <Box>
              <Typography fontWeight="bold">
                {employee.name} • Gen ID: {employee.genId}
              </Typography>
              <Typography variant="body2">{employee.email}</Typography>
            </Box>
          </Box>
        </Grid>

        <Grid item xs={12} sm="auto" sx={{ px: 2 }}>
          <Typography variant="body2" color="text.secondary">Designation</Typography>
          <Typography fontWeight="bold">{employee.designation}</Typography>
        </Grid>

        <Divider orientation="vertical" flexItem sx={{ mx: 1 }} />

        <Grid item xs={12} sm="auto" sx={{ px: 2 }}>
          <Typography variant="body2" color="text.secondary">Division</Typography>
          <Typography fontWeight="bold">{employee.division}</Typography>
        </Grid>

        <Divider orientation="vertical" flexItem sx={{ mx: 1 }} />

        <Grid item xs={12} sm="auto" sx={{ px: 2 }}>
          <Typography variant="body2" color="text.secondary">Manager</Typography>
          <Typography fontWeight="bold">{employee.manager}</Typography>
        </Grid>
      </Grid>

      <Box className="required-info-section">
        <Assignment className="required-info-icon" />
        <Typography fontWeight="bold" className="required-info-text">
          Required Information
        </Typography>
      </Box>

      <Container maxWidth="1392px">
        <ProofDetailsForm setWorkflowState={setWorkflowState} workflowState={workflowState} />
      </Container>
    </Box>
  );
}
