import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import { CatalogService } from "../../service/catalogService";
import { UploadImage } from "./index";

jest.mock("../../service/catalogService");

describe("UploadImage Component", () => {
  test("clicking the button opens the file input", () => {
    const { getByText, getByTestId } = render(
      <UploadImage name="Upload New Image" onUpload={() => {}} />,
    );

    const fileInput = getByTestId("file-input");

    expect(fileInput).toHaveStyle({ display: "none" });

    const uploadButton = getByText("Upload New Image");
    const mockClickFunction = jest.fn();

    uploadButton.addEventListener("click", mockClickFunction);

    fireEvent.click(uploadButton);

    expect(mockClickFunction).toHaveBeenCalled();
  });

  test("uploading an image calls onUpload callback", async () => {
    const mockSaveCatalog = jest.spyOn(CatalogService, "saveCatalog");
    mockSaveCatalog.mockResolvedValueOnce({ success: true });

    const onUploadMock = jest.fn();

    const { getByTestId } = render(
      <UploadImage name="Upload New Image" onUpload={onUploadMock} />,
    );

    const fileInput = getByTestId("file-input");

    fireEvent.change(fileInput, {
      target: {
        files: [
          new File(["sample-image"], "sample-image.jpg", {
            type: "image/jpeg",
          }),
        ],
      },
    });

    await waitFor(() => {
      expect(onUploadMock).toHaveBeenCalledTimes(1);
    });
  });

  test("handling file change with no file does not call onUpload callback", async () => {
    const onUploadMock = jest.fn();

    const { getByTestId } = render(
      <UploadImage name="Upload New Image" onUpload={onUploadMock} />,
    );

    const fileInput = getByTestId("file-input");

    fireEvent.change(fileInput, {
      target: {
        files: null,
      },
    });

    await waitFor(() => {
      expect(onUploadMock).not.toHaveBeenCalled();
    });
  });
});
