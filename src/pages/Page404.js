import { Helmet } from 'react-helmet-async';
import { Link as RouterLink } from 'react-router-dom';
// @mui
import { styled } from '@mui/material/styles';
import { Button, Typography, Container, Box } from '@mui/material';

// ----------------------------------------------------------------------

const StyledContent = styled('div')(({ theme }) => ({
  maxWidth: 480,
  margin: 'auto',
  minHeight: '100vh',
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  padding: theme.spacing(12, 0),
}));

// ----------------------------------------------------------------------

export default function Page404() {
  return (
    <>
      <Helmet>
        <title> 404 Page Not Found | ๋จธ๋ํ </title>
      </Helmet>

      <Container>
        <StyledContent sx={{ textAlign: 'center', alignItems: 'center' }}>
          <Typography variant="h3" paragraph>
            Sorry, page not found๐ญ
          </Typography>

          <Typography sx={{ color: 'text.secondary' }}>
            ์ด๋ฐ! ํ์ด์ง๋ฅผ ์ฐพ์ ์ ์์ต๋๋ค. ์๋ ฅํ์  ์ฃผ์๋ฅผ ๋ค์ ํ์ธํด์ฃผ์ธ์.
          </Typography>

          <Box
            component="img"
            src="/assets/illustrations/illustration_404.svg"
            sx={{ height: 260, mx: 'auto', my: { xs: 5, sm: 10 } }}
          />

          <Button to="/" size="large" variant="contained" component={RouterLink}>
            Go to Moneyfit
          </Button>
        </StyledContent>
      </Container>
    </>
  );
}
