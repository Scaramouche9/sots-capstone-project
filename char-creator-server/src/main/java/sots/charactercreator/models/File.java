package sots.charactercreator.models;
 
public class File {
    private String fileName;
    private String fileDownloadUri;
    private String fileType;
    private long size;

    public File(String fileName, String uri, String type, long size){
        this.fileName = fileName;
        this.fileDownloadUri = uri;
        this.fileType = type;
        this.size = size;
    }

    public String getFileName() {
        return fileName;
    }

    public void setFileName(String fileName) {
        this.fileName = fileName;
    }

    public String getFileDownloadUri() {
        return fileDownloadUri;
    }

    public void setFileDownloadUri(String fileDownloadUri) {
        this.fileDownloadUri = fileDownloadUri;
    }

    public String getFileType() {
        return fileType;
    }

    public void setFileType(String fileType) {
        this.fileType = fileType;
    }

    public long getSize() {
        return size;
    }

    public void setSize(long size) {
        this.size = size;
    }
}