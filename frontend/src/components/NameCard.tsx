import { Card, CardContent, Typography } from "@mui/material"

export const NameCard = ({name}:{name: string}) => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h5" component="div" bgcolor={"yellow"}>
          Nombre: {name}
        </Typography>
      </CardContent>
    </Card>
  )
}
