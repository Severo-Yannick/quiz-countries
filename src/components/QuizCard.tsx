import { FC } from "react";
import { Score } from "./Score";
import { QuizCardProps } from "../types/quizCardProps";
import { Container, Typography, Card, CardHeader, CardContent, Box, CardActions, Button } from "@mui/material"

export const QuizCard: FC<QuizCardProps> = ({ quizName, score, questionNumber, handleResponse, quizQuestion, country, flag }) => {

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
      {!country ?
        <Typography
          component="h4"
          variant="h4"
          align="center"
          color="text.primary"
          gutterBottom
        >
          Chargement du quiz en cours...
        </Typography>
        :
        <Card>
          <CardHeader
            title={country}
            subheader={flag}
            titleTypographyProps={{ align: 'center' }}
            subheaderTypographyProps={{
              align: 'center',
              fontSize: '45px'
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
              <Typography component="h5" variant="h5" color="text.secondary">
                {country ? quizQuestion() : null}
              </Typography>
            </Box>
          </CardContent>
          <CardActions>
            <Button
              onClick={() => handleResponse(true)}
              fullWidth
              variant={'contained'}
            >
              Vrai
            </Button>
            <Button
              onClick={() => handleResponse(false)}
              fullWidth
              variant={'contained'}
            >
              Faux
            </Button>
          </CardActions>
        </Card>
      }
      <br />
      <Score score={score} questionNumber={questionNumber} />
    </Container>
  );
};