import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function SearchBarActivity() {
  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '40ch' }, 
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="What are your favourite activites?" variant="outlined" />
    </Box>
  );
}