import { Container, Typography, Card, CardHeader, CardContent, Box, CardActions, Button } from "@mui/material"

interface QuizCardProps {
  quizName: string;
}

export const QuizCard = ({quizName}: QuizCardProps) => {
  return (
    <Container disableGutters maxWidth="sm" component="main" sx={{ pt: 8, pb: 6 }}>
      <Typography
        component="h1"
        variant="h2"
        align="center"
        color="text.primary"
        gutterBottom
      >
        {quizName}
      </Typography>
      <Card>
        <CardHeader
          title={"Nom de la carte"}
          subheader={"sous titre"}
          titleTypographyProps={{ align: 'center' }}
          subheaderTypographyProps={{
            align: 'center',
          }}
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === 'light'
                ? theme.palette.grey[200]
                : theme.palette.grey[700],
          }}
        />
        <CardContent>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'baseline',
              mb: 2,
            }}
          >
            <Typography component="h2" variant="h3" color="text.primary">
              Du texte
            </Typography>
            <Typography variant="h6" color="text.secondary">
              du texte
            </Typography>
          </Box>
          <ul>
            <Typography
              component="li"
              variant="subtitle1"
              align="center"
            >
              du texte
            </Typography>
          </ul>
        </CardContent>
        <CardActions>
          <Button
            fullWidth
            variant={'contained'}
          >
            Vrai
          </Button>
          <Button
            fullWidth
            variant={'contained'}
          >
            Faux
          </Button>
        </CardActions>
      </Card>
    </Container>
  );
};