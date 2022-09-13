import NextLink from "next/link";
import { AppBar, Toolbar, Link, Box, Button, Badge } from "@mui/material";
import Typography from "@mui/material/Typography";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import IconButton from "@mui/material/IconButton";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

export const Navbar = () => {
  return (
    <AppBar>
      <Toolbar>
        <NextLink href="/" passHref>
          <Link display="flex" alignItems="baseline">
            <Typography variant="h6">Teslo |</Typography>
            <Typography sx={{ ml: 0.5 }}>Shop</Typography>
          </Link>
        </NextLink>

        <Box flex={1}></Box>

        <Box sx={{display:{xs:'none', sm:'block',}}}>
          <NextLink href="/category/men" passHref>
            <Link>
              <Button>Man</Button>
            </Link>
          </NextLink>
          <NextLink href="/category/women" passHref>
            <Link>
              <Button>Woman</Button>
            </Link>
          </NextLink>
          <NextLink href="/category/kids" passHref>
            <Link>
              <Button>Kids</Button>
            </Link>
          </NextLink>
        </Box>

        <Box flex={1}></Box>

        <IconButton>
          <SearchOutlinedIcon></SearchOutlinedIcon>
        </IconButton>

        <NextLink href="/cart" passHref>
          <Link>
            <IconButton>
              <Badge badgeContent={2} color="secondary">
                <ShoppingCartOutlinedIcon />
              </Badge>
            </IconButton>
          </Link>
        </NextLink>

        <Button>Menu</Button>
      </Toolbar>
    </AppBar>
  );
};
