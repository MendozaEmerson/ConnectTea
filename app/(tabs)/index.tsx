import { Image } from 'expo-image';
import { StyleSheet, View } from 'react-native';
import ParallaxScrollView from '@/components/parallax-scroll-view';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { HeaderBackground } from '@react-navigation/elements';

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#c8f384ff', dark: '#6cdfb8ff' }}
      headerImage={
        <Image
          source={require('@/assets/images/logoSN.png')}
          style={styles.headerLogo}
        />
      }>

      {/* Bienvenida */}
      <ThemedView style={styles.welcomeContainer}>
        <ThemedText type="title" style={styles.welcomeTitle}>
          🎓 Bienvenido, Docente
        </ThemedText>
        <ThemedText style={styles.welcomeSubtitle}>
          Plataforma de Aprendizaje Personalizado para Estudiantes con TEA
        </ThemedText>
      </ThemedView>

      {/* ¿Qué es TEA? */}
      <ThemedView style={styles.sectionContainer}>
        <ThemedText type="subtitle" style={styles.sectionTitle}>
          📚 ¿Qué es el TEA?
        </ThemedText>
        <ThemedText style={styles.bodyText}>
          El <ThemedText type="defaultSemiBold">Trastorno del Espectro Autista (TEA)</ThemedText> es
          una condición del neurodesarrollo que afecta la comunicación, interacción social y el
          comportamiento. Cada estudiante es único y requiere estrategias pedagógicas adaptadas a
          sus necesidades específicas.
        </ThemedText>
      </ThemedView>

      {/* Niveles de TEA */}
      <ThemedView style={styles.sectionContainer}>
        <ThemedText type="subtitle" style={styles.sectionTitle}>
          📊 Niveles de Apoyo en TEA
        </ThemedText>
        <ThemedText style={styles.bodyText}>
          Según el DSM-5, existen tres niveles de apoyo basados en las necesidades del estudiante:
        </ThemedText>

        {/* Tabla de Niveles */}
        <View style={styles.tableContainer}>
          {/* Nivel 1 */}
          <View style={[styles.levelCard, styles.level1]}>
            <View style={styles.levelHeader}>
              <ThemedText type="defaultSemiBold" style={styles.levelNumber}>
                Nivel 1
              </ThemedText>
              <ThemedText type="defaultSemiBold" style={styles.levelLabel}>
                Necesita Apoyo
              </ThemedText>
            </View>
            <ThemedText style={styles.levelDescription}>
              • Dificultades leves en comunicación social{'\n'}
              • Puede desenvolverse con apoyo mínimo{'\n'}
              • Dificultad para iniciar interacciones{'\n'}
              • Rigidez en rutinas que afecta poco
            </ThemedText>
            <View style={styles.levelFooter}>
              <ThemedText style={styles.levelStrategy}>
                💡 Estrategia: Instrucciones claras, rutinas visuales
              </ThemedText>
            </View>
          </View>

          {/* Nivel 2 */}
          <View style={[styles.levelCard, styles.level2]}>
            <View style={styles.levelHeader}>
              <ThemedText type="defaultSemiBold" style={styles.levelNumber}>
                Nivel 2
              </ThemedText>
              <ThemedText type="defaultSemiBold" style={styles.levelLabel}>
                Necesita Apoyo Notable
              </ThemedText>
            </View>
            <ThemedText style={styles.levelDescription}>
              • Dificultades marcadas en comunicación{'\n'}
              • Respuestas limitadas a interacciones{'\n'}
              • Comportamientos repetitivos notorios{'\n'}
              • Dificultad para adaptarse a cambios
            </ThemedText>
            <View style={styles.levelFooter}>
              <ThemedText style={styles.levelStrategy}>
                💡 Estrategia: Apoyo estructurado, pictogramas, refuerzos
              </ThemedText>
            </View>
          </View>

          {/* Nivel 3 */}
          <View style={[styles.levelCard, styles.level3]}>
            <View style={styles.levelHeader}>
              <ThemedText type="defaultSemiBold" style={styles.levelNumber}>
                Nivel 3
              </ThemedText>
              <ThemedText type="defaultSemiBold" style={styles.levelLabel}>
                Necesita Apoyo Muy Notable
              </ThemedText>
            </View>
            <ThemedText style={styles.levelDescription}>
              • Déficits graves en comunicación verbal/no verbal{'\n'}
              • Mínima respuesta a interacciones sociales{'\n'}
              • Comportamientos repetitivos muy marcados{'\n'}
              • Gran dificultad para cambios de rutina
            </ThemedText>
            <View style={styles.levelFooter}>
              <ThemedText style={styles.levelStrategy}>
                💡 Estrategia: Apoyo intensivo, comunicación aumentativa
              </ThemedText>
            </View>
          </View>
        </View>
      </ThemedView>

      {/* Características de la App */}
      <ThemedView style={styles.sectionContainer}>
        <ThemedText type="subtitle" style={styles.sectionTitle}>
          🎯 ¿Cómo te ayuda esta App?
        </ThemedText>

        <View style={styles.featureItem}>
          <ThemedText style={styles.featureIcon}>📴</ThemedText>
          <View style={styles.featureContent}>
            <ThemedText type="defaultSemiBold">Funciona sin Internet</ThemedText>
            <ThemedText style={styles.featureDescription}>
              Accede a lecciones, ejercicios y recursos en cualquier momento
            </ThemedText>
          </View>
        </View>

        <View style={styles.featureItem}>
          <ThemedText style={styles.featureIcon}>🎨</ThemedText>
          <View style={styles.featureContent}>
            <ThemedText type="defaultSemiBold">Contenido Personalizado</ThemedText>
            <ThemedText style={styles.featureDescription}>
              Adaptado a los niveles de apoyo y ritmo de cada estudiante
            </ThemedText>
          </View>
        </View>

        <View style={styles.featureItem}>
          <ThemedText style={styles.featureIcon}>📊</ThemedText>
          <View style={styles.featureContent}>
            <ThemedText type="defaultSemiBold">Seguimiento de Progreso</ThemedText>
            <ThemedText style={styles.featureDescription}>
              Monitorea avances y ajusta estrategias pedagógicas
            </ThemedText>
          </View>
        </View>

        <View style={styles.featureItem}>
          <ThemedText style={styles.featureIcon}>🎮</ThemedText>
          <View style={styles.featureContent}>
            <ThemedText type="defaultSemiBold">Gamificación Inclusiva</ThemedText>
            <ThemedText style={styles.featureDescription}>
              Motivación mediante logros, puntos y refuerzos positivos
            </ThemedText>
          </View>
        </View>
      </ThemedView>

      {/* Llamado a la acción */}
      <ThemedView style={styles.ctaContainer}>
        <ThemedText type="subtitle" style={styles.ctaTitle}>
          ¡Comienza Ahora! 🚀
        </ThemedText>
        <ThemedText style={styles.ctaText}>
          Explora las pestañas para acceder a practicas, seguir el progreso de tus estudiantes
          y personalizar el contenido según sus necesidades.
        </ThemedText>
      </ThemedView>

    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerLogo: {
    height: 128,
    width: 300,
    bottom: 50,
    left: 50,
    position: 'absolute',
    //transform: [{ translateX: -100 }]
  },
  welcomeContainer: {
    alignItems: 'center',
    paddingVertical: 20,
    gap: 8,
  },
  welcomeTitle: {
    textAlign: 'center',
  },
  welcomeSubtitle: {
    textAlign: 'center',
    fontSize: 16,
    opacity: 0.8,
    paddingHorizontal: 20,
  },
  sectionContainer: {
    gap: 12,
    marginBottom: 20,
    paddingHorizontal: 16,
  },
  sectionTitle: {
    marginBottom: 8,
  },
  bodyText: {
    fontSize: 15,
    lineHeight: 24,
  },
  tableContainer: {
    gap: 16,
    marginTop: 12,
  },
  levelCard: {
    borderRadius: 12,
    padding: 16,
    borderWidth: 2,
    gap: 12,
  },
  level1: {
    backgroundColor: '#E8F5E9',
    borderColor: '#4CAF50',
  },
  level2: {
    backgroundColor: '#FFF3E0',
    borderColor: '#FF9800',
  },
  level3: {
    backgroundColor: '#FFEBEE',
    borderColor: '#F44336',
  },
  levelHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  levelNumber: {
    fontSize: 18,
    color: '#333',
  },
  levelLabel: {
    fontSize: 14,
    color: '#555',
  },
  levelDescription: {
    fontSize: 14,
    lineHeight: 22,
    color: '#444',
  },
  levelFooter: {
    borderTopWidth: 1,
    borderTopColor: 'rgba(0,0,0,0.1)',
    paddingTop: 8,
  },
  levelStrategy: {
    fontSize: 13,
    fontStyle: 'italic',
    color: '#555',
  },
  featureItem: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 16,
    alignItems: 'flex-start',
  },
  featureIcon: {
    fontSize: 32,
  },
  featureContent: {
    flex: 1,
    gap: 4,
  },
  featureDescription: {
    fontSize: 14,
    opacity: 0.7,
    lineHeight: 20,
  },
  ctaContainer: {
    backgroundColor: '#4A90E2',
    borderRadius: 12,
    padding: 20,
    marginHorizontal: 16,
    marginBottom: 32,
    gap: 8,
  },
  ctaTitle: {
    color: '#FFFFFF',
    textAlign: 'center',
  },
  ctaText: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontSize: 14,
    lineHeight: 22,
    opacity: 0.95,
  },
});
