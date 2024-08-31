import Image from "next/image";
import getSripe from '@/utils/get-stripe'
import {SignedIn, SignedOut, UserButton} from '@clerk/nextjs'
import {Container, Head, AppBar, Typography, Button,} from '@mui/material'

export default function Home() {
  return (
    <Container maxWidth='lg'>
      <Head>
        <title>Flashcard Saas</title>
        <meta name = "description" content="Create flashcard from your text"/>
      </Head>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">Flashcard Saas</Typography>
          <SignedOut>
            <Button color="inherit">Login</Button>
            <Button color="inherit">Sign Up</Button>
          </SignedOut>
          <SignedIn>
            <UserButton/>
          </SignedIn>
        </Toolbar>
      </AppBar>
    </Container>
  );
}
