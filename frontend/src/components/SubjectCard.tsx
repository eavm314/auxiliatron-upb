import { 
  Card, CardContent, 
  Grid, List, ListItem, 
  ListItemText, Paper, 
  Typography, styled } 
from "@mui/material"
import { LocationOn, Schedule } from "@mui/icons-material";

const styles = {
  card: {
    border: '1px solid #ccc',
    borderRadius: '8px',
    padding: '16px',
    width: '900px', // Ajusta el ancho según tus necesidades
    height: '150px', // Ajusta el alto según tus necesidades
  },
  listItem: {
    paddingLeft: '0',
    paddingRight: '0',
  },
}

const SubjectCard = () => {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));



  return (
    <Card style={styles.card}>
      <CardContent>
        <Grid container spacing={2}>
          {/* Primera fila */}
          <Grid item xs={1}>
            {/* Icono en la esquina superior izquierda */}
            <LocationOn color="primary" fontSize="large" />
          </Grid>
          <Grid item xs={7}>
            {/* Título de la materia */}
            <Typography variant="h6" component="h2">
              Materia de ejemplo
            </Typography>
            {/* Nombre del docente */}
            <Typography variant="body1" color="textSecondary">
              Docente: Nombre del Docente
            </Typography>
          </Grid>
          <Grid item xs={4}>
            {/* Aula y horario */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <LocationOn color="primary" fontSize="small" />
                <Typography variant="body2" color="textSecondary" style={{ marginLeft: '8px' }}>
                  Aula: Nombre del Aula
                </Typography>
              </div>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <Schedule color="primary" fontSize="small" />
                <Typography variant="body2" color="textSecondary" style={{ marginLeft: '8px' }}>
                  Horario: Hora de Inicio - Hora de Fin
                </Typography>
              </div>
            </div>
          </Grid>

          {/* Segunda fila */}
          <Grid item xs={12}>
            {/* Lista de tareas */}
            <Typography variant="body2" color="textSecondary" style={{ marginTop: '16px' }}>
              Tareas:
            </Typography>
            <List>
              <ListItem style={styles.listItem}>
                <ListItemText primary="Tarea 1" />
              </ListItem>
              <ListItem style={styles.listItem}>
                <ListItemText primary="Tarea 2" />
              </ListItem>
              <ListItem style={styles.listItem}>
                <ListItemText primary="Tarea 3" />
              </ListItem>
            </List>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  )
}

export default SubjectCard