import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  Box,
  Typography,
  Container,
} from "@mui/material";

import Link from "next/link";
import { makeStyles } from "@mui/styles";
import Header from "../../components/Header";
import { useRouter } from "next/router";

const useStyles = makeStyles((theme) => ({
  example: {
    color: "#ccc",
  },

  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },

  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    borderRadius: "8px",
    border: "1px solid #ccc",
    cursor: "pointer",
  },

  cardMedia: {
    paddingTop: "140%",
    height: "70%",
  },
}));




function Home({ posts, categories }) {
  const classes = useStyles();

  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Header categories={categories} />
      <main>
        <Container className={classes.cardGrid} maxWidth="lg">
          <Grid container spacing={2}>
            {posts.map((post) => (
              <Link
                key={post.id}
                href={`product/${encodeURIComponent(post.slug)}`}
              >
                <Grid item xs={6} sm={4} md={3}>
                  <Card className={classes.card} elevation={0}>
                    {/* <CardMedia
                      className={classes.cardMedia}
                      image={post.product_image[0].image}
                      alt={post.product_image[0].alt_text}
                    /> */}

                    <CardContent>
                      <Typography gutterBottom component="p">
                        {post.title}
                      </Typography>
                      <Box component="h1" fontWeight={900} fontSize={16}>
                        ${post.regular_price}
                      </Box>
                    </CardContent>
                  </Card>
                </Grid>
              </Link>
            ))}
          </Grid>
        </Container>
      </main>
    </>
  );
}

export async function getStaticPaths() {
  return {
    paths: [{ params: { slug: "shoes" } }],
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const res = await fetch(`http://localhost:8000/api/category/${params.slug}`);
  const posts = await res.json();

  const ress = await fetch("http://localhost:8000/api/category/");
  const categories = await ress.json();



  return {
    props: {
      posts,
      categories
    },
  };
}

export default Home;
