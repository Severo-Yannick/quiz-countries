import { Score } from "../components/Score";
import { GlobalStyles, CssBaseline, AppBar, Toolbar, Typography, Link } from "@mui/material";
import { QUIZZES } from "../utils/constants";
import { upperFirst } from "../utils/upperFirst";

export const Header = () => {
  return (
    <>
      <GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }} />
      <CssBaseline />
      <AppBar
        position="static"
        color="default"
        elevation={0}
        sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
      >
        <Toolbar sx={{ flexWrap: 'wrap' }}>
          <Typography variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>
            Quizz Countries
          </Typography>
          <nav>
            {QUIZZES.map(quiz => {
              return <Link
                key={quiz}
                variant="button"
                color="text.primary"
                href={`/${quiz}`}
                sx={{ my: 1, mx: 1.5 }}
              >
                {upperFirst(quiz)}
              </Link>
            })}
          </nav>
          <Score />
        </Toolbar>
      </AppBar>
    </>
  );
}