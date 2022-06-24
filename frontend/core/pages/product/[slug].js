import { makeStyles } from "@mui/styles";
import Header from "../../components/Header";
import { useRouter } from "next/router";
import Head from "next/head";
import { Paper, Grid, Box, Hidden, Container } from "@mui/material";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(5),
    borderRadius: "5px",
  },
  paperImagePreview: {
    paddingTop: 30,
  },
  paperImage: {
    padding: theme.spacing(5),
    borderRadius: "5px",
    border: "1px solid #ccc",
    marginLeft: 25,
    marginTop: 25,
    marginRight: 75,
    ["@media (max-width:600px)"]: {
      marginLeft: -20,
      marginRight: -20,
    },
  },
  paperRight: {
    padding: theme.spacing(5),
    borderRadius: "0",
    paddingLeft: 40,
    paddingTop: 30,
    ["@media (max-width:600px)"]: {
      paddingLeft: 0,
      paddingTop: 10,
    },
  },
  img: {
    maxWidth: "100%",
  },
}));

function Product({ post }) {
  const classes = useStyles();
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Head>
        <title>{post.title}</title>
      </Head>
      <Header />
      <Container maxWidth="md">
        <h1>{post.title} details page</h1>
        <Grid container spacing={0}>
          {/* <Hidden only={["xs", "sm"]}>
            <Grid item sm={1}>
              <Paper className={classes.paperImagePreview} elevation={0}>
                {post.product_image.map((c) => (
                  <div key={c.id}>
                    <Paper className={classes.paperImage} elevation={0}>
                      <img
                        // src={post.product_image[0].image}
                        alt={post.product_image[0].alt_text}
                        className={classes.img}
                      />
                    </Paper>
                  </div>
                ))}
              </Paper>
            </Grid>
          </Hidden> */}
          <Grid item xs={12} sm={6}>
            <h3>{post.title} Image</h3>
            <Paper className={classes.paperImage} elevation={0}>
              <img
                // src={post.product_image[0].image}
                alt={post.product_image[0].alt_text}
                className={classes.img}
              />
            </Paper>
          </Grid>
          <Grid item xs={12} sm={5}>
            <h3>{post.title} information</h3>
            <Paper className={classes.paperRight} elevation={0}>
              <Box component="h1" fontSize={18} fontWeight="400">
                {post.title}
              </Box>
              <Box component="p" fontSize={22} fontWeight="900" m={0}>
                £{post.regular_price}
              </Box>
              <Box component="p" m={0} fontSize={14}>
                Free Delivery & Returns (Ts&Cs apply)
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export async function getStaticPaths() {
  return {
    paths: [
      {
        params: {
          slug: "boots-2",
        },
      },
    ],
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const res = await fetch(`http://localhost:8000/api/${params.slug}/`);
  const post = await res.json();

  return {
    props: { post },
  };
}

export default Product;
