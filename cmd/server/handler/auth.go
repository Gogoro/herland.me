package handler

import (
	"net/http"
	"time"

	"github.com/golang-jwt/jwt/v5"
	"github.com/labstack/echo/v4"
	"github.com/maragudk/env"
)

type JwtCustomClaims struct {
	Name  string `json:"name"`
	Admin bool   `json:"admin"`
	jwt.RegisteredClaims
}

type LoginData struct {
	Error string
}

func PostLogin(c echo.Context) error {
	_ = env.Load(".env")

	password := c.FormValue("password")

	var ld LoginData
	// Throws unauthorized error
	if password != env.GetStringOrDefault("AUTH_TOKEN", "TEST") {
		ld.Error = "Auth failed"
		return c.Render(200, "admin-login", ld)
	}

	// Set custom claims
	claims := &JwtCustomClaims{
		"Ole",
		true,
		jwt.RegisteredClaims{
			ExpiresAt: jwt.NewNumericDate(time.Now().Add(time.Hour * 72)),
		},
	}

	// Create token with claims
	token := jwt.NewWithClaims(jwt.SigningMethodHS256, claims)
	tokenString, err := token.SignedString([]byte(env.GetStringOrDefault("JWT_SECRET", "TEST")))
	if err != nil {
		ld.Error = "Auth failed"
		return c.Render(200, "admin-login", ld)
	}

	cookie := new(http.Cookie)
	cookie.Name = "auth"
	cookie.Value = tokenString
	cookie.Expires = time.Now().Add(24 * time.Hour)
	c.SetCookie(cookie)

	return c.Redirect(302, "/admin/thoughts")
}

func Accessible(c echo.Context) error {
	return c.String(http.StatusOK, "Accessible")
}

func Restricted(c echo.Context) error {
	user := c.Get("user").(*jwt.Token)
	claims := user.Claims.(*JwtCustomClaims)
	name := claims.Name
	return c.String(http.StatusOK, "Welcome "+name+"!")
}
