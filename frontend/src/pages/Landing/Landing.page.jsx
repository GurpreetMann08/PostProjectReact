import { Container } from "@mantine/core";
import {
  Title,
  SimpleGrid,
  Text,
  Button,
  ThemeIcon,
  Grid,
  rem,
} from "@mantine/core";
import { Features } from "./Features";
import { NavLink } from "react-router-dom";
import classes from "./Features.module.css";

const handleClick = (action) => {
  close();
  if (action) action();
};
const Landing = () => {
  const items = Features.map((feature) => (
    <div key={feature.title}>
      <ThemeIcon
        size={44}
        radius="md"
        variant="gradient"
        gradient={{ deg: 133, from: "blue", to: "cyan" }}
      >
        <feature.icon
          style={{ width: rem(26), height: rem(26) }}
          stroke={1.5}
        />
      </ThemeIcon>
      <Text fz="lg" mt="sm" fw={500}>
        {feature.title}
      </Text>
      <Text c="dimmed" fz="sm">
        {feature.description}
      </Text>
    </div>
  ));

  return (
    <Container>
      <div className={classes.wrapper}>
        <Grid gutter={80}>
          <Grid.Col span={{ base: 12, md: 5 }}>
            <Title className={classes.title} order={2}>
              Things Ends But Memories Last Forever
            </Title>
            <br />
            <Text c="dimmed">
              This picture memory website offers a comprehensive solution for
              preserving, organizing, and sharing personal photographs,
              empowering users to cherish and celebrate their memories in a
              digital format.
            </Text>
            <NavLink onClick={handleClick} className={classes.link} to="/login">
              <Button
                variant="gradient"
                gradient={{ deg: 133, from: "blue", to: "cyan" }}
                size="lg"
                radius="md"
                mt="xl"
              >
                Get started
              </Button>
            </NavLink>
          </Grid.Col>
          <Grid.Col span={{ base: 12, md: 7 }}>
            <SimpleGrid cols={{ base: 1, md: 2 }} spacing={30}>
              {items}
            </SimpleGrid>
          </Grid.Col>
        </Grid>
      </div>
    </Container>
  );
};

export default Landing;
