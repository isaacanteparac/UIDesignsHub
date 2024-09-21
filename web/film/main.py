from moviepy.editor import *

def extraer_audio_mkv(video_path, audio_path):
    """Extrae el audio de un video MKV utilizando MoviePy.

    Args:
        video_path (str): Ruta al archivo MKV.
        audio_path (str): Ruta donde se guardará el archivo de audio.
    """

    video = VideoFileClip(video_path)
    audio = video.audio
    audio.write_audiofile(audio_path)

# Ejemplo de uso:
video_mkv = "C:/Users/thisi/Videos/glassway.mkv"
audio_file = "C:/Users/thisi/Documents/extraerAudioOfVideo/gassway.mp3"

extraer_audio_mkv(video_mkv, audio_file)