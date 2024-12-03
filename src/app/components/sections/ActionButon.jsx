import { Box, Button } from "@mui/material";
import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";
import { useTranslation } from 'react-i18next';

const ActionButon = () => {
  const { t } = useTranslation();
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Link href="/about" passHref>
        <Button
          component={motion.button}
          whilehover={{ scale: 1.05 }}
          whiletap={{ scale: 0.95 }}
          variant="contained"
          color="info"
          size="large"
          sx={{
            borderRadius: 2,
            px: 4,
            py: 1.5,
            fontSize: "1.1rem",
            textTransform: "none",
            boxShadow: 2,
            "&:hover": {
              boxShadow: 4,
            },
          }}
        >
          {t("hero.learnMore")}
        </Button>
      </Link>
    </Box>
  );
};

export default ActionButon;
