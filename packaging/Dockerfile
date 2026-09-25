# CryCat como aplicación web (FastAPI + frontend React compilado)
#
#   docker build -f packaging/Dockerfile -t crycat .
#   docker run --rm -p 8080:8080 crycat      → http://localhost:8080
#
# Compila el frontend en una etapa con Node y lo sirve el backend.

# ---------- 1) frontend ----------
FROM node:20-slim AS web
WORKDIR /web
COPY frontend/package.json frontend/package-lock.json ./
RUN npm ci --silent
COPY frontend/ ./
# el backend sirve el frontend desde backend/crycat/web
RUN npm run build

# ---------- 2) backend + app ----------
FROM python:3.11-slim
ENV PYTHONUNBUFFERED=1 PIP_NO_CACHE_DIR=1 \
    CRYCAT_WEB=1 CRYCAT_DATA_DIR=/data PORT=8080
RUN apt-get update && apt-get install -y --no-install-recommends \
        libglib2.0-0 libgl1 libjpeg62-turbo zlib1g \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /app
COPY backend/requirements.txt backend/requirements.txt
RUN pip install -r backend/requirements.txt

COPY backend/ backend/
COPY scripts/ scripts/
# frontend ya compilado (incluye pikmin/sonidos si estaban en public/)
COPY --from=web /web/dist/ backend/crycat/web/

RUN mkdir -p /data && useradd -m crycat && chown -R crycat /data /app
USER crycat
EXPOSE 8080
HEALTHCHECK --interval=30s --timeout=5s --start-period=25s \
  CMD python -c "import urllib.request;urllib.request.urlopen('http://127.0.0.1:8080/api/health',timeout=4)"

WORKDIR /app/backend
CMD ["python", "-m", "crycat", "--no-browser"]
