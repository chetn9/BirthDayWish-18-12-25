import React, { useRef } from "react";
import {
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
  Box,
  IconButton,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import {
  KeyboardArrowDown,
  KeyboardArrowUpOutlined,
} from "@mui/icons-material";
import BirthdayCake from "./components/BirthdayCake";
import EnvelopeCard from "./components/EnvelopeCard";
import Footer from "./components/Footer";

const BirthdayPage = () => {

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const cakeRef = useRef(null);
  const envelopRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      <Container
        maxWidth="xl"
        sx={{
          py: isMobile ? 0 : 4,
          px: isMobile ? 0 : 3,
        }}
      >
        <Grid
          container
          spacing={isMobile ? 0 : 3}
          justifyContent="center"
          alignItems="stretch"
          sx={{
            minHeight: isMobile ? "auto" : "85vh", // Ensure good height on desktop
          }}
        >
          {/* Welcome Message Card */}
          <Grid item xs={12} md={4}>
            <Card
              sx={{
                height: isMobile ? "100vh" : "100%",
                minHeight: { md: "700px" }, // Minimum height for desktop
                background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                color: "white",
                position: "relative",
                overflow: "hidden",
                borderRadius: isMobile ? 0 : 3,
                display: "flex",
                flexDirection: "column",
              }}
            >
              <CardContent
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  flex: 1,
                  minHeight: isMobile ? "100vh" : 400,
                  pb: 8,
                  px: isMobile ? 3 : 3,
                }}
              >
                <Typography
                  variant={isMobile ? "h2" : "h3"}
                  gutterBottom
                  align="center"
                  sx={{ fontFamily: "Poppins, sans-serif" }}
                >
                  🍰🍰
                </Typography>
                <Typography
                  variant={isMobile ? "h3" : "h4"}
                  gutterBottom
                  align="center"
                  fontWeight={400}
                  sx={{ fontFamily: "Poppins, sans-serif" }}
                >
                  Wishing You a Wonderful Day Dear{" "}
                  <b style={{ color: "#fcd53f" }}>Mausami</b>
                </Typography>
                <Typography
                  variant="body1"
                  align="center"
                  sx={{
                    mt: 2,
                    fontSize: isMobile ? "1.2rem" : "1.1rem",
                    fontFamily: "Poppins, sans-serif",
                  }}
                >
                  May your birthday be filled with joy, laughter, and beautiful
                  memories!
                </Typography>

                <Box sx={{ mt: isMobile ? 4 : 3, px: 2 }}>
                  <Typography
                    variant="body2"
                    align="center"
                    sx={{
                      mb: 2,
                      fontStyle: "italic",
                      fontSize: isMobile ? "1rem" : "0.95rem",
                      fontFamily: "Poppins, sans-serif",
                    }}
                  >
                    ✨ May all your dreams come true
                  </Typography>
                  <Typography
                    variant="body2"
                    align="center"
                    sx={{
                      mb: 2,
                      fontStyle: "italic",
                      fontSize: isMobile ? "1rem" : "0.95rem",
                      fontFamily: "Poppins, sans-serif",
                    }}
                  >
                    🌟 Wishing you endless happiness
                  </Typography>
                  <Typography
                    variant="body2"
                    align="center"
                    sx={{
                      mb: 2,
                      fontStyle: "italic",
                      fontSize: isMobile ? "1rem" : "0.95rem",
                      fontFamily: "Poppins, sans-serif",
                    }}
                  >
                    💝 Cheers to another amazing year
                  </Typography>
                  <Typography
                    variant="body2"
                    align="center"
                    sx={{
                      fontStyle: "italic",
                      fontSize: isMobile ? "1rem" : "0.95rem",
                      fontFamily: "Poppins, sans-serif",
                    }}
                  >
                    🎊 Here's to making unforgettable memories
                  </Typography>
                </Box>

                <Typography
                  variant={isMobile ? "h4" : "h5"}
                  align="center"
                  sx={{ mt: isMobile ? 4 : 3 }}
                >
                  🎂 🎈 🎁
                </Typography>

                <Box
                  sx={{
                    position: "absolute",
                    bottom: 20,
                    left: "50%",
                    transform: "translateX(-50%)",
                  }}
                >
                  <IconButton
                    onClick={() => scrollToSection(cakeRef)}
                    sx={{
                      color: "white",
                      backgroundColor: "rgba(255, 255, 255, 0.2)",
                      "&:hover": {
                        backgroundColor: "rgba(255, 255, 255, 0.3)",
                      },
                      animation: "bounce 2s infinite",
                      "@keyframes bounce": {
                        "0%, 20%, 50%, 80%, 100%": {
                          transform: "translateY(0)",
                        },
                        "40%": {
                          transform: "translateY(-10px)",
                        },
                        "60%": {
                          transform: "translateY(-5px)",
                        },
                      },
                    }}
                  >
                    <KeyboardArrowDown fontSize="large" />
                  </IconButton>
                </Box>
              </CardContent>
            </Card>
          </Grid>

          {/* Birthday Cake Card */}
          <Grid item xs={12} md={4} ref={cakeRef}>
            <Card
              sx={{
                height: isMobile ? "100vh" : "100%",
                minHeight: { md: "700px" },
                borderRadius: isMobile ? 0 : 3,
                position: "relative",
                display: "flex",
                flexDirection: "column",
                background: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
                boxShadow: isMobile
                  ? "none"
                  : "0 20px 60px rgba(0, 0, 0, 0.15)",
                overflow: "visible",
              }}
            >
              {/* Animated Top Border - Outside overflow */}
              <Box
                sx={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  height: "6px",
                  background:
                    "linear-gradient(90deg, #ff6b6b, #feca57, #48dbfb, #ff6b6b)",
                  backgroundSize: "300% 100%",
                  animation: "gradientMove 4s linear infinite",
                  borderRadius: isMobile ? 0 : "12px 12px 0 0",
                  zIndex: 10,
                  "@keyframes gradientMove": {
                    "0%": { backgroundPosition: "0% 0%" },
                    "100%": { backgroundPosition: "300% 0%" },
                  },
                }}
              />

              <CardContent
                sx={{
                  p: 0,
                  flex: 1,
                  position: "relative",
                  display: "flex",
                  flexDirection: "column",
                  overflow: "hidden",
                  borderRadius: isMobile ? 0 : 3,
                }}
              >
                <Box
                  sx={{
                    position: "absolute",
                    top: 60,
                    left: 10,
                    fontSize: "2rem",
                    animation: "bounce 2s ease-in-out infinite",
                    zIndex: 10,
                    "@keyframes bounce": {
                      "0%, 100%": { transform: "translateY(0px)" },
                      "50%": { transform: "translateY(-10px)" },
                    },
                  }}
                >
                  🎂
                </Box>

                <Box
                  sx={{
                    position: "absolute",
                    top: 60,
                    right: 10,
                    fontSize: "2rem",
                    animation: "bounce 2s ease-in-out infinite 0.5s",
                    zIndex: 10,
                    "@keyframes bounce": {
                      "0%, 100%": { transform: "translateY(0px)" },
                      "50%": { transform: "translateY(-10px)" },
                    },
                  }}
                >
                  🎉
                </Box>

                <Box
                  sx={{
                    bgcolor: "rgba(255, 255, 255, 0.95)",
                    backdropFilter: "blur(10px)",
                    py: 3,
                    px: 2,
                    textAlign: "center",
                    // borderRadius: isMobile ? 0 : "24px 24px 0 0",
                    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
                    mt: "6px", // Push down to make room for top border
                  }}
                >
                  <Typography
                    variant={isMobile ? "h4" : "h5"}
                    gutterBottom
                    align="center"
                    sx={{
                      fontFamily: "Poppins, sans-serif",
                      fontWeight: 700,
                      background:
                        "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      mb: 1,
                    }}
                  >
                    Have Your BirthDay Cake
                  </Typography>
                </Box>

                <Box sx={{ flex: 1, position: "relative" }}>
                  <BirthdayCake />
                </Box>

                {isMobile && (
                  <Box
                    sx={{
                      position: "absolute",
                      bottom: 20,
                      left: "50%",
                      transform: "translateX(-50%)",
                      zIndex: 10,
                    }}
                  >
                    <IconButton
                      onClick={() => scrollToSection(envelopRef)}
                      sx={{
                        color: "#f5576c",
                        backgroundColor: "rgba(255, 255, 255, 0.95)",
                        backdropFilter: "blur(10px)",
                        boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
                        "&:hover": {
                          backgroundColor: "rgba(255, 255, 255, 1)",
                          transform: "scale(1.1)",
                          boxShadow: "0 12px 40px rgba(0, 0, 0, 0.15)",
                        },
                        animation: "bounce 2s infinite",
                        "@keyframes bounce": {
                          "0%, 20%, 50%, 80%, 100%": {
                            transform: "translateY(0)",
                          },
                          "40%": {
                            transform: "translateY(-10px)",
                          },
                          "60%": {
                            transform: "translateY(-5px)",
                          },
                        },
                      }}
                    >
                      <KeyboardArrowDown fontSize="large" />
                    </IconButton>
                  </Box>
                )}
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>

      <Grid item xs={12} md={4} ref={envelopRef}>
        <Card
          sx={{
            height: isMobile ? "100vh" : "100%",
            minHeight: { md: "700px" },
            borderRadius: isMobile ? 0 : 3,
            position: "relative",
            display: "flex",
            flexDirection: "column",
            background: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
            boxShadow: isMobile ? "none" : "0 20px 60px rgba(0, 0, 0, 0.15)",
            overflow: "visible",
          }}
        >
          {/* Animated Top Border */}
          <Box
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              height: "6px",
              background:
                "linear-gradient(90deg, #ff6b6b, #feca57, #48dbfb, #ff6b6b)",
              backgroundSize: "300% 100%",
              animation: "gradientMove 4s linear infinite",
              borderRadius: isMobile ? 0 : "12px 12px 0 0",
              zIndex: 10,
              "@keyframes gradientMove": {
                "0%": { backgroundPosition: "0% 0%" },
                "100%": { backgroundPosition: "300% 0%" },
              },
            }}
          />

          <CardContent
            sx={{
              p: 0,
              flex: 1,
              position: "relative",
              display: "flex",
              flexDirection: "column",
              overflow: "hidden",
              borderRadius: isMobile ? 0 : 3,
            }}
          >
            {/* Full-height envelope container */}
            <Box
              sx={{
                flex: 1,
                position: "relative",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                mt: "6px", // Account for top border
              }}
            >
              <EnvelopeCard />
            </Box>

            {isMobile && (
              <Box
                sx={{
                  position: "absolute",
                  bottom: 20,
                  left: "50%",
                  transform: "translateX(-50%)",
                  zIndex: 10,
                }}
              >
                <IconButton
                  onClick={() => scrollToSection(cakeRef)}
                  sx={{
                    color: "#f5576c",
                    backgroundColor: "rgba(255, 255, 255, 0.95)",
                    backdropFilter: "blur(10px)",
                    boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
                    "&:hover": {
                      backgroundColor: "rgba(255, 255, 255, 1)",
                      transform: "scale(1.1)",
                      boxShadow: "0 12px 40px rgba(0, 0, 0, 0.15)",
                    },
                    animation: "bounce 2s infinite",
                    "@keyframes bounce": {
                      "0%, 20%, 50%, 80%, 100%": {
                        transform: "translateY(0)",
                      },
                      "40%": {
                        transform: "translateY(-10px)",
                      },
                      "60%": {
                        transform: "translateY(-5px)",
                      },
                    },
                  }}
                >
                  <KeyboardArrowUpOutlined fontSize="large" />
                </IconButton>
              </Box>
            )}
          </CardContent>
        </Card>
      </Grid>

      <Footer/>
    </>
  );
};

export default BirthdayPage;
