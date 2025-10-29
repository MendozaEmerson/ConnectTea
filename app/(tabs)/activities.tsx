import { StyleSheet, View, Pressable, ScrollView } from 'react-native';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Link } from 'expo-router';

// Definición de las actividades
const activities = [
  {
    id: 'motricidad_fina',
    title: 'Motricidad Fina',
    icon: '✋',
    color: '#FF6B6B',
    description: 'Ejercicios para desarrollar la coordinación de movimientos precisos con las manos y dedos.',
    benefits: 'Mejora la escritura, el uso de herramientas y la autonomía en actividades diarias.',
    results: 'Evalúa precisión, velocidad y control en tareas como trazos, recortes y manipulación de objetos.',
    route: '/activities/motricidad_fina' as const,
  },
  {
    id: 'atencion_concentracion',
    title: 'Atención y Concentración',
    icon: '🎯',
    color: '#4ECDC4',
    description: 'Actividades diseñadas para mejorar el enfoque sostenido y la capacidad de filtrar distracciones.',
    benefits: 'Fundamental para el aprendizaje académico y la realización de tareas complejas.',
    results: 'Mide tiempo de atención, número de aciertos y capacidad para mantener el foco en la tarea.',
    route: '/activities/atencion_concentracion' as const,
  },
  {
    id: 'vocabulario',
    title: 'Vocabulario',
    icon: '📚',
    color: '#95E1D3',
    description: 'Ejercicios para ampliar el repertorio de palabras y mejorar la comprensión del lenguaje.',
    benefits: 'Facilita la comunicación, expresión de necesidades y comprensión de instrucciones.',
    results: 'Evalúa cantidad de palabras reconocidas, uso contextual y capacidad de categorización.',
    route: '/activities/vocabulario' as const,
  },
  {
    id: 'razonamiento',
    title: 'Razonamiento',
    icon: '🧩',
    color: '#F38181',
    description: 'Actividades de lógica, resolución de problemas y pensamiento secuencial.',
    benefits: 'Desarrolla habilidades cognitivas esenciales para la vida académica y cotidiana.',
    results: 'Mide capacidad de solución, tiempo de respuesta y estrategias utilizadas.',
    route: '/activities/razonamiento' as const,
  },
  {
    id: 'lectoescritura',
    title: 'Lectoescritura',
    icon: '✍️',
    color: '#AA96DA',
    description: 'Ejercicios de lectura comprensiva y escritura adaptados a diferentes niveles de apoyo.',
    benefits: 'Base fundamental para la comunicación escrita y acceso al conocimiento.',
    results: 'Evalúa comprensión lectora, fluidez, ortografía y coherencia en la escritura.',
    route: '/activities/lectoescritura' as const,
  },
];

export default function ActivitiesScreen() {

  return (
    <ScrollView style={styles.container}>
      <ThemedView style={styles.header}>
        <ThemedText type="title" style={styles.headerTitle}>
          🎨 Actividades Terapéuticas
        </ThemedText>
        <ThemedText style={styles.headerSubtitle}>
          Prácticas diseñadas específicamente para estudiantes con TEA
        </ThemedText>
      </ThemedView>

      <ThemedView style={styles.content}>
        {activities.map((activity) => (
          <View key={activity.id} style={[styles.activityCard, { borderLeftColor: activity.color }]}>
            {/* Header de la tarjeta */}
            <View style={styles.cardHeader}>
              <View style={styles.titleSection}>
                <ThemedText style={styles.activityIcon}>{activity.icon}</ThemedText>
                <ThemedText type="subtitle" style={styles.activityTitle}>
                  {activity.title}
                </ThemedText>
              </View>
              <Link href={activity.route} asChild>
                <Pressable
                  style={({ pressed }) => [
                    styles.actionButtonContainer,
                    { backgroundColor: pressed ? '#99acf8ff' : '#131414ff' },
                  ]}
                >
                  <View style={styles.actionButtonInner}>
                    <ThemedText style={[styles.buttonText, { color: activity.color }]}>
                      Iniciar
                    </ThemedText>
                  </View>
                </Pressable>
              </Link>
            </View>

            {/* Descripción */}
            <View style={styles.cardSection}>
              <ThemedText type="defaultSemiBold" style={styles.sectionLabel}>
                📖 ¿Qué es?
              </ThemedText>
              <ThemedText style={styles.sectionText}>{activity.description}</ThemedText>
            </View>

            {/* Beneficios */}
            <View style={styles.cardSection}>
              <ThemedText type="defaultSemiBold" style={styles.sectionLabel}>
                💡 ¿En qué ayuda?
              </ThemedText>
              <ThemedText style={styles.sectionText}>{activity.benefits}</ThemedText>
            </View>

            {/* Resultados */}
            <View style={styles.cardSection}>
              <ThemedText type="defaultSemiBold" style={styles.sectionLabel}>
                📊 ¿Qué evalúa?
              </ThemedText>
              <ThemedText style={styles.sectionText}>{activity.results}</ThemedText>
            </View>
          </View>
        ))}
      </ThemedView>

      {/* Información adicional */}
      <ThemedView style={styles.footer}>
        <View style={styles.infoBox}>
          <ThemedText style={styles.infoIcon}>ℹ️</ThemedText>
          <View style={styles.infoContent}>
            <ThemedText type="defaultSemiBold">Recomendaciones</ThemedText>
            <ThemedText style={styles.infoText}>
              • Realiza las actividades en un ambiente tranquilo{'\n'}
              • Adapta el tiempo según las necesidades del estudiante{'\n'}
              • Celebra cada logro, por pequeño que sea{'\n'}
              • Revisa el progreso regularmente
            </ThemedText>
          </View>
        </View>
      </ThemedView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    paddingVertical: 54,
    paddingHorizontal: 20,
    alignItems: 'center',
    gap: 8,
  },
  headerTitle: {
    textAlign: 'center',
  },
  headerSubtitle: {
    textAlign: 'center',
    fontSize: 14,
    opacity: 0.7,
  },
  content: {
    paddingHorizontal: 16,
    gap: 20,
    paddingBottom: 20,
  },
  activityCard: {
    borderRadius: 16,
    borderLeftWidth: 6,
    padding: 20,
    backgroundColor: '#faf9f9ff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
    gap: 16,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: 12,
  },
  titleSection: {
    //flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    flexShrink: 1,
    gap: 8,
  },
  activityIcon: {
    fontSize: 20,
  },
  activityTitle: {
    flex: 1,
  },
  actionButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.1)',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 2,
    alignSelf: 'flex-start'
  },
  buttonText: {
    //color: '#0a1af3ff',
    fontWeight: 'bold',
    fontSize: 13,
  },
  actionButtonContainer: {
    borderRadius: 25,
    paddingVertical: 10,
    paddingHorizontal: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 4,
    elevation: 3,
    alignSelf: 'flex-start',
    borderWidth: 1,
    borderColor: 'rgba(10, 10, 10, 0.1)',
    //transition: 'all 0.2s ease-in-out',
  },

  actionButtonInner: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    //color: '#0eecd6ff',
    gap: 6,
  },
  cardSection: {
    gap: 6,
  },
  sectionLabel: {
    fontSize: 14,
    marginBottom: 2,
  },
  sectionText: {
    fontSize: 14,
    lineHeight: 20,
    opacity: 0.8,
  },
  footer: {
    paddingHorizontal: 16,
    paddingBottom: 32,
  },
  infoBox: {
    flexDirection: 'row',
    gap: 12,
    backgroundColor: '#E3F2FD',
    borderRadius: 12,
    padding: 16,
    borderWidth: 1,
    borderColor: '#90CAF9',
  },
  infoIcon: {
    fontSize: 24,
  },
  infoContent: {
    flex: 1,
    gap: 8,
  },
  infoText: {
    fontSize: 13,
    lineHeight: 20,
    opacity: 0.8,
  },
});
